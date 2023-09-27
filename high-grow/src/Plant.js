// Plant.js
import React from 'react';
import './Plant.css';

function Plant({ onUpgrade, upgradeLevel }) {
  // Additional props and local state variables would go here
  
  return (
    <div className="plant">
      <button onClick={onUpgrade} disabled={upgradeLevel === 0}>
        {upgradeLevel === 0 ? 'Unlock Plant (Level 1)' : 'Plant'}
      </button>
      {/* Progress bar, labels, and other UI elements would go here */}
    </div>
  );
}

export default Plant;
