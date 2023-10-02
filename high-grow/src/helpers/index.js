// src/helpers/index.js
import { UPGRADE_COST_MULTIPLIER } from "../constants";
export const calculateUpgradeCost = (cost) => Math.ceil(cost * UPGRADE_COST_MULTIPLIER);
export const calculateHarvestValue = (baseValue, level) => {

    const levelMultiplier = 1 + (0.1 * level);
    return Math.floor(baseValue * levelMultiplier);
  };
