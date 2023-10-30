// src/redux/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { calculateUpgradeCost, calculateHarvestValue } from '../helpers';
import { buildingNames, managerNames } from '../constants';

const buildingImages = ['kiosk.png', 'cafe.png', 'arcade.png', 'diner.png', 'laundromat.png', 'boutique.png',
 'bookstore.png', 'theater.png', 'art-gallery.png', 'tech-hub.png', 'hotel.png', 'skating-rink.png',
  'gym.png', 'marketplace.png', 'condominium.png', 'music-club.png', 'aquarium.png'];
  const achievements = [
    {
      id: 1,
      name: "First Purchase",
      description: "Buy your first building.",
      condition: (state) => state.buildings.some(building => building.count > 0),
      reward: { type: "currency", amount: 100 },
      isAchieved: false
    },
    {
      id: 2,
      name: "Entrepreneur",
      description: "Own one of every building.",
      condition: (state) => state.buildings.every(building => building.count > 0),
      reward: { type: "currency", amount: 500 },
      isAchieved: false
    },
    // ... (you can add more achievements here)
  ];
const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currency: 100000,
    achievements: achievements,
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
        harvestValue: Math.floor(10 * (1.5 ** index)),
        hasManager: false,
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
    managers: (() => {
    return buildingNames.map((name, index) => ({
      id: index + 1,
      name: managerNames[index],
      isHired: false,
      buildingId: index + 1,
      cost: (index + 1) * 100,
    }));
  })()
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
    buyBuilding: (state, action) => {
      const building = state.buildings.find(b => b.id === action.payload);
      if (building && state.currency >= building.cost) {
        building.count += 1;
        state.currency -= building.cost;
        
        // Check achievements after buying a building
        state.achievements.forEach(achievement => {
          if (!achievement.isAchieved && achievement.condition(state)) {
            achievement.isAchieved = true;
            // You can also add the reward logic here or keep it separate
            if (achievement.reward.type === "currency") {
              state.currency += achievement.reward.amount;
            }
            // ... handle other reward types
          }
        });
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
    
    // Ensure the manager exists, is not already hired, and the player has enough currency
      if(state.currency >= manager.cost) {
        
      }
      if (!manager.isHired && state.currency >= manager.cost) {
        state.currency -= manager.cost;
        state.currency = Math.floor(state.currency);
        manager.isHired = true;
        
        // Mark the manager as hired
        manager.isHired = true;

        // Optionally: Mark the associated building as having a hired manager
        const building = state.buildings.find((p) => p.id === manager.buildingId);
        if (building) {
            building.hasManager = true;
        }
    }},
    updateProgress: (state) => {
        // Calculating progress based on elapsed time since last updated
        const currentTime = Date.now();
        state.buildings.forEach(building => {
          if(building && building.level > 0) {
          const elapsed = currentTime - building.lastUpdated;
          building.progress = Math.min(building.progress + elapsed, building.growthTime);
          building.lastUpdated = currentTime;
          }
          if (building.progress >= building.growthTime) {
            const manager = state.managers.find(m => m.buildingId === building.id);
            if (manager && manager.isHired) {
                const buildingHarvestValue = calculateHarvestValue(building.harvestValue, building.level);
                state.currency += buildingHarvestValue;
                state.currency = Math.floor(state.currency);
                building.progress = 0;
                building.lastUpdated = currentTime;
            }
        }
        });
      },
  }
});

export const { harvest, purchaseUpgrade, hireManager, updateProgress } = gameSlice.actions;
export default gameSlice.reducer;
