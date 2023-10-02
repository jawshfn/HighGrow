// src/helpers/index.js
import { LEVEL_MULTIPLIER, UPGRADE_COST_MULTIPLIER } from "../constants";

export const calculateUpgradeCost = (baseValue, level) => Math.ceil(baseValue * Math.pow(UPGRADE_COST_MULTIPLIER, level));

export const calculateHarvestValue = (baseValue, level) => {

    const levelMultiplier = 1 + (LEVEL_MULTIPLIER * level);
    return Math.floor(baseValue * levelMultiplier);
  };
