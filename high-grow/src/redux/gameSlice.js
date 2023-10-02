// src/redux/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { calculateUpgradeCost, calculateHarvestValue } from '../helpers';


const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currency: 100000000,
    plants: [
      { id: 1, name: 'OG KUSH', growthTime: 5000, progress: 0, lastUpdated: Date.now(), level: 0, harvestValue: 10 }
    ],
    upgrades: [
      { id: 1, name: 'Better Soil', cost: 50, effect: 'increaseYield', value: 20, plantId: 1}
    ],
    managers: [
      { id: 1, name: 'Bud Buddy', cost: 100, effect: 'autoHarvest', plantId: 1 }
    ]
  },
  reducers: {
    harvest: (state) => {
      state.plants.forEach(plant => {
        if(plant.level > 0) {
        // Calculating harvestValue based on the level of the plant
        const plantHarvestValue = calculateHarvestValue(plant.harvestValue, plant.level);
        console.log(plantHarvestValue);
        state.currency += plantHarvestValue;
        plant.progress = 0;
        plant.lastUpdated = Date.now();
        }
      });
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
            
            // Milestone Benefits
            if (plant.level === 25) plant.growthTime /= 2; // 100% increase in production speed
            if (plant.level === 50) plant.harvestValue *= 2; // Double the harvest amount
            if (plant.level === 100) plant.harvestValue *= 3; // Triple the harvest amount at level 100


            
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
