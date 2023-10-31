// src/utils/formatNumber.js
export const formatNumber = (num) => {
    if (num < 1e3) return num.toString(); // Less than 1,000
    if (num < 1e6) return +(num / 1e3).toFixed(2) + "K"; // Less than 1,000,000
    if (num < 1e9) return +(num / 1e6).toFixed(1) + "M"; // Less than 1,000,000,000
    if (num < 1e12) return +(num / 1e9).toFixed(1) + "B"; // Less than 1,000,000,000,000
    return +(num / 1e12).toFixed(1) + "T"; // Trillion or more
  };
  