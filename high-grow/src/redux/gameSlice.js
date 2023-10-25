// src/redux/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { calculateUpgradeCost, calculateHarvestValue } from '../helpers';
import { plantNames } from '../constants';


const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currency: 100000,
    plants: (() => {

      // Return the plants array with specific names
      return plantNames.map((name, index) => ({
        id: index + 1,
        name: name,
        growthTime: 5000 * (1.25 ** index),
        progress: 0,
        lastUpdated: Date.now(),
        level: 0,
        harvestValue: Math.floor(10 * (1.5 ** index))
      }));
    })(),
    upgrades: [
      {  id: 1, name: 'Upgrade for OG KUSH', cost: 50, effect: 'increaseYield', value: 20, plantId: 1 },
      // Each subsequent upgrade has a 50% increase in cost
      ...Array(25).fill().map((_, index) => ({
        id: index + 2,
        name: `Upgrade for Plant ${index + 2}`,
        cost: Math.ceil(50 * (1.5 ** index)),
        effect: 'increaseYield',
        value: 20,
        plantId: index + 2
      }))
    ],
    managers: [
      { id: 1, name: 'Bud Buddy', cost: 100, effect: 'autoHarvest', plantId: 1 }
    ]
  },
  reducers: {
    harvest: (state, action) => {
      const plantId = action.payload;
      const plant = state.plants.find(p => p.id === plantId);
      if (plant) {
        const plantHarvestValue = calculateHarvestValue(plant.harvestValue, plant.level);
        state.currency += plantHarvestValue;
        state.currency = Math.floor(state.currency);
        plant.progress = 0;
        plant.lastUpdated = Date.now();
      }
    },
    purchaseUpgrade: (state, action) => {
      const upgrade = state.upgrades.find((u) => u.id === action.payload);
      if (state.currency >= upgrade.cost) {
        state.currency -= upgrade.cost;
        state.currency = Math.floor(state.currency);
       
        if (upgrade.effect === 'increaseYield') {
          const plant = state.plants.find((p) => p.id === upgrade.plantId);
          if (plant) {
            
            plant.level++;
            plant.harvestValue = calculateHarvestValue(plant.harvestValue, plant.level);
            
            


            
          }
          upgrade.cost = calculateUpgradeCost(upgrade.cost, plant.level); // Use helper function
        }
        
        
      }
    },
    hireManager: (state, action) => {
      const manager = state.managers.find((m) => m.id === action.payload);
      if (state.currency >= manager.cost) {
        state.currency -= manager.cost;
        state.currency = Math.floor(state.currency);
        const plant = state.plants.find((p) => p.id === manager.plantId);
        plant.autoHarvest = true;
      }
    },
    updateProgress: (state) => {
        // Calculating progress based on elapsed time since last updated
        const currentTime = Date.now();
        state.plants.forEach(plant => {
          if(plant && plant.level > 0) {
          const elapsed = currentTime - plant.lastUpdated;
          plant.progress = Math.min(plant.progress + elapsed, plant.growthTime);
          plant.lastUpdated = currentTime;
          }
        });
      },
  }
});

export const { harvest, purchaseUpgrade, hireManager, updateProgress } = gameSlice.actions;
export default gameSlice.reducer;
