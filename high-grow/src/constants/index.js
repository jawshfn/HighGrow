// src/constants/index.js
export const LEVEL_MULTIPLIER = 0.1;
export const UPGRADE_COST_MULTIPLIER = 1.1;
export const MILESTONE_LEVELS = [25, 50, 100];
export const buildingNames = [
  "Neon Kiosk",
"Neon Cafe",
"Neon Arcade",
"Neon Diner",
"Glowing Laundromat",
"Neon Boutique",
"Luminous Bookstore",
"Neon Theater",
"Glowing Art Gallery",
"Neon Tech Hub",
"Luminous Hotel",
"Neon Skating Rink",
"Glowing Gym",
"Neon Marketplace",
"Luminous Condominium",
"Neon Music Club",
"Glowing Aquarium",
"Neon Corporate Tower",
"Luminous Park",
"Neon Harbor",
"Luminous Hospital",
"Neon University",
"Glowing Stadium",
"Neon Transport Hub",
"Neon Tower"
];
export const managerNames = [ "Kara the Kiosk Keeper",
"Cafe Commander Chris",
"Arcade Ace Amy",
"Diner Director Dylan",
"Laundromat Luminary Lily",
"Boutique Boss Bella",
"Bookstore Baron Ben",
"Theater Tycoon Terry",
"Gallery Guru Grace",
"Tech Titan Tim",
"Hotel Honcho Harry",
"Skating Specialist Sarah",
"Gym Giant Gina",
"Marketplace Master Max",
"Condominium Captain Claire",
"Music Maestro Mason",
"Aquarium Admiral Alice",
"Corporate Chief Casey",
"Park Protector Pete",
"Harbor Heroine Hannah",
"Hospital Head Heather",
"University Usher Uriel",
"Stadium Star Stanley",
"Transport Titan Tessa",
"Tower Topper Toby"
];
export const achievements = [
  {
    id: 1,
    name: "First Purchase",
    description: "Buy your first building.",
    condition: (state) => state.buildings.some(building => building.count > 0),
    reward: { type: "currency", amount: 100 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 2,
    name: "Entrepreneur",
    description: "Own one of every building.",
    condition: (state) => state.buildings.every(building => building.count > 0),
    reward: { type: "currency", amount: 500 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 'cityNovice',
    name: 'City Novice',
    description: 'Own at least one of every building type.',
    condition: (state) => state.buildings.every(building => building.count >= 1),
    reward: {
        type: 'currency',
        amount: 500
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'neonTycoon',
    name: 'Neon Tycoon',
    description: 'Earn a cumulative total of 10,000 currency.',
    condition: (state) => state.currency >= 10000,
    reward: {
        type: 'currency',
        amount: 1000
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'managerMagnate',
    name: 'Manager Magnate',
    description: 'Hire all managers.',
    condition: (state) => state.managers.every(manager => manager.isHired),
    reward: {
        type: 'currency',
        amount: 1500
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'cityOfLights',
    name: 'City of Lights',
    description: 'Reach level 10 for any building.',
    condition: (state) => state.buildings.some(building => building.count >= 10),
    reward: {
        type: 'currency',
        amount: 2000
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'neonConnoisseur',
    name: 'Neon Connoisseur',
    description: 'Spend a cumulative total of 5,000 currency on upgrades.',
    // This condition assumes there's a totalSpent variable in the state.
    condition: (state) => state.totalSpent >= 5000, 
    reward: {
        type: 'currency',
        amount: 2500
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'cityLuminary',
    name: 'City Luminary',
    description: 'Reach a total city population of 100,000.',
    // This condition assumes there's a population variable in the state.
    condition: (state) => state.population >= 100000,
    reward: {
        type: 'currency',
        amount: 3000
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'neonExpert',
    name: 'Neon Expert',
    description: 'Play the game for 7 consecutive days.',
    // This condition assumes there's a consecutiveDaysLoggedIn variable in the state.
    condition: (state) => state.consecutiveDaysLoggedIn >= 7,
    reward: {
        type: 'currency',
        amount: 3500
    },
    isAchieved: false,
    isClaimed: false
},
{
    id: 'citysPride',
    name: "City's Pride",
    description: 'Own 50 of any single building type.',
    condition: (state) => state.buildings.some(building => building.count >= 50),
    reward: {
        type: 'currency',
        amount: 4000
    },
    isAchieved: false,
    isClaimed: false
}
  // ... (you can add more achievements here)
];