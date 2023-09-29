// src/redux/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currency: 100000,
    harvestValue: 10,
    plants: [
      { id: 1, name: 'Plant 1', growthTime: 5000, progress: 0, lastUpdated: Date.now() }
    ],
    upgrades: [
      { id: 1, name: 'Better Soil', cost: 50, effect: 'increaseYield', value: 20 }
    ],
    managers: [
      { id: 1, name: 'Bud Buddy', cost: 100, effect: 'autoHarvest', plantId: 1 }
    ]
  },
  reducers: {
    harvest: (state) => {
        state.currency += state.harvestValue;
        // Resetting progress and updating lastUpdated time on harvest
        state.plants.forEach(plant => {
          plant.progress = 0;
          plant.lastUpdated = Date.now();
        });
      },
    purchaseUpgrade: (state, action) => {
      const upgrade = state.upgrades.find((u) => u.id === action.payload);
      if (state.currency >= upgrade.cost) {
        state.currency -= upgrade.cost;
        if (upgrade.effect === 'increaseYield') {
          state.harvestValue += (state.harvestValue * upgrade.value) / 100;
        }
         // Increasing the cost of the upgrade exponentially
         upgrade.cost = Math.ceil(upgrade.cost * 1.07); // 1.07 is the multiplier; you can adjust it as needed
      }
    },
    hireManager: (state, action) => {
      const manager = state.managers.find((m) => m.id === action.payload);
      if (state.currency >= manager.cost) {
        state.currency -= manager.cost;
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
