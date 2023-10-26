// src/redux/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { calculateUpgradeCost, calculateHarvestValue } from '../helpers';
import { buildingNames } from '../constants';

const buildingImages = ['kiosk.png', 'cafe.png', 'arcade.png', 'diner.png'];
const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currency: 100000,
    buildings: (() => {

      // Return the buildings array with specific names
      return buildingNames.map((name, index) => ({
        id: index + 1,
        name: name,
        growthTime: 5000 * (1.25 ** index),
        progress: 0,
        lastUpdated: Date.now(),
        level: 0,
        photo: buildingImages[index],
        harvestValue: Math.floor(10 * (1.5 ** index))
      }));
    })(),
    upgrades: [
      {  id: 1, name: 'Upgrade for Neon Kiosk', cost: 50, effect: 'increaseYield', value: 20, buildingId: 1 },
      // Each subsequent upgrade has a 50% increase in cost
      ...Array(25).fill().map((_, index) => ({
        id: index + 2,
        name: `Upgrade for Building ${index + 2}`,
        cost: Math.ceil(50 * (1.5 ** index)),
        effect: 'increaseYield',
        value: 20,
        buildingId: index + 2
      }))
    ],
    managers: [
      { id: 1, name: 'Bud Buddy', cost: 100, effect: 'autoHarvest', buildingId: 1 }
    ]
  },
  reducers: {
    harvest: (state, action) => {
      const buildingId = action.payload;
      const building = state.buildings.find(p => p.id === buildingId);
      if (building) {
        const buildingHarvestValue = calculateHarvestValue(building.harvestValue, building.level);
        state.currency += buildingHarvestValue;
        state.currency = Math.floor(state.currency);
        building.progress = 0;
        building.lastUpdated = Date.now();
      }
    },
    purchaseUpgrade: (state, action) => {
      const upgrade = state.upgrades.find((u) => u.id === action.payload);
      if (state.currency >= upgrade.cost) {
        state.currency -= upgrade.cost;
        state.currency = Math.floor(state.currency);
       
        if (upgrade.effect === 'increaseYield') {
          const building = state.buildings.find((p) => p.id === upgrade.buildingId);
          if (building) {
            
            building.level++;
            building.harvestValue = calculateHarvestValue(building.harvestValue, building.level);
            
            


            
          }
          upgrade.cost = calculateUpgradeCost(upgrade.cost, building.level); // Use helper function
        }
        
        
      }
    },
    hireManager: (state, action) => {
      const manager = state.managers.find((m) => m.id === action.payload);
      if (state.currency >= manager.cost) {
        state.currency -= manager.cost;
        state.currency = Math.floor(state.currency);
        const building = state.buildings.find((p) => p.id === manager.buildingId);
        building.autoHarvest = true;
      }
    },
    updateProgress: (state) => {
        // Calculating progress based on elapsed time since last updated
        const currentTime = Date.now();
        state.buildings.forEach(building => {
          if(building && building.level > 0) {
          const elapsed = currentTime - building.lastUpdated;
          building.progress = Math.min(building.progress + elapsed, building.growthTime);
          building.lastUpdated = currentTime;
          }
        });
      },
  }
});

export const { harvest, purchaseUpgrade, hireManager, updateProgress } = gameSlice.actions;
export default gameSlice.reducer;
