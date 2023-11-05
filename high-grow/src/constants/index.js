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
export const buildingImages = ['kiosk.png', 'cafe.png', 'arcade.png', 'diner.png', 
'laundromat.png', 'boutique.png', 'bookstore.png', 'theater.png', 'art-gallery.png',
 'tech-hub.png', 'hotel.png', 'skating-rink.png', 'gym.png', 'marketplace.png', 
 'condominium.png', 'music-club.png', 'aquarium.png'];
export const achievements = [
  {
    id: 1,
    name: "First Purchase",
    description: "Buy your first building",
    condition: "FIRST_BUILDING",
    reward: { type: "currency", amount: 100 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 2,
    name: "Level 5 Achieved!",
    description: "Get a building to level 5",
    condition: "LEVEL_5_ACHIEVED",
    reward: { type: "currency", amount: 250 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 3,
    name: "Level 10 Achieved!",
    description: "Get a building to level 10",
    condition: "LEVEL_10_ACHIEVED",
    reward: { type: "currency", amount: 1000 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 4,
    name: "Entrepreneur",
    description: "Own one of every building.",
    condition: "ENTREPRENEUR",
    reward: { type: "currency", amount: 1000000 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 5,
    name: "Early Bird",
    description: "Earn 1,000 currency",
    condition: "EARLY_BIRD",
    reward: { type: "currency", amount: 1000 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 6,
    name: "Building Diversifier",
    description: "Own at least one of 3 different building types",
    condition: "BUILDING_DIVERSITY",
    reward: { type: "currency", amount: 1500 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 7,
    name: "Neon Novice",
    description: "Earn 5,000 currency",
    condition: "NEON_NOVICE",
    reward: { type: "currency", amount: 2500 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 8,
    name: "Manager Maestro",
    description: "Hire 3 managers",
    condition: "MANAGER_MAESTRO",
    reward: { type: "currency", amount: 3500 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 9,
    name: "City Developer",
    description: "Own 20 buildings",
    condition: "CITY_DEVELOPER",
    reward: { type: "currency", amount: 5000 },
    isAchieved: false,
    isClaimed: false
  },
  {
    id: 10,
    name: "Neon Knight",
    description: "Earn 10,000 currency",
    condition: "NEON_KNIGHT",
    reward: { type: "currency", amount: 7500 },
    isAchieved: false,
    isClaimed: false
  },
  // ... (you can add more achievements here)
];
