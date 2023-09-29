// src/redux/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currency: 100000,
    harvestValue: 10,
    plants: [
      { id: 1, name: 'OG KUSH', growthTime: 5000, progress: 0, lastUpdated: Date.now(), level: 0 }
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



        
        // Calculating harvestValue based on the level of the plant
        const levelMultiplier = 1 + (0.1 * plant.level); // 0.1 is the increase per level; adjust as needed
        const plantHarvestValue = state.harvestValue * levelMultiplier;


        state.currency += plantHarvestValue;
        state.currency = Math.floor(state.currency);
        
        plant.progress = 0;
        plant.lastUpdated = Date.now();
      });
    },
    purchaseUpgrade: (state, action) => {
      const upgrade = state.upgrades.find((u) => u.id === action.payload);
      if (state.currency >= upgrade.cost) {
        state.currency -= upgrade.cost;
        state.currency = Math.floor(state.currency);
        // Apply the upgrade
        if (upgrade.effect === 'increaseYield') {
          state.harvestValue += (state.harvestValue * upgrade.value) / 100;
        }

         // Increasing the level of the associated plant
         const plant = state.plants.find((p) => p.id === upgrade.plantId);
         if (plant) plant.level++;
         // Increasing the cost of the upgrade exponentially
         upgrade.cost = Math.ceil(upgrade.cost * 1.2); // 1.07 is the multiplier; you can adjust it as needed
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
          const elapsed = currentTime - plant.lastUpdated;
          plant.progress = Math.min(plant.progress + elapsed, plant.growthTime);
          plant.lastUpdated = currentTime;
        });
      }
  }
});

export const { harvest, purchaseUpgrade, hireManager, updateProgress } = gameSlice.actions;
export default gameSlice.reducer;
