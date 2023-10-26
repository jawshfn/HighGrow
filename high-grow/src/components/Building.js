// src/components/Building.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { harvest, updateProgress, purchaseUpgrade } from '../redux/gameSlice';
import '../styles/Building.css'; // Updated import statement
import ProgressBar from './ProgressBar';
import {calculateHarvestValue} from '../helpers';
import { formatNumber } from '../util/formatNumber';
import Upgrade from './Upgrade';

function Building({ id, name, growthTime, progress, lastUpdated, level, baseHarvestValue, upgrades, photo }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updateProgress());
    const intervalId = setInterval(() => {
      dispatch(updateProgress());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);
  
  const harvestValue = calculateHarvestValue(baseHarvestValue, level); // Use the same calculation
  const progressPercentage = (progress / growthTime) * 100;
  const cps = harvestValue && growthTime ? ((harvestValue / growthTime) * 1000).toFixed(2) : 0; // added check here
  const canHarvest = progress >= growthTime;
  return (
    <div className="building">
      <h3>{name}</h3>
      <img src={`/images/${photo}`} alt={name} className="building-image" />

      <p>Level: {level}</p>
      <p>Development Time: {growthTime ? (growthTime / 1000).toFixed(2) : 0} s</p> {/* added check here */}
      <p>Currency per Second: ${cps}</p>
      <div className="progress-container">
      <div className="progress-label">
          {progressPercentage.toFixed(2)}% {/* Render progress percentage */}
        </div>
        <ProgressBar progress={progress} max={growthTime} />
      </div>
      
      <div className="buttons-container">
      <button 
          className="collect-button" 
          onClick={() => dispatch(harvest(id))} 
          disabled={!canHarvest} // Disable the button if the plant cannot be harvested
        >
          Collect {formatNumber(harvestValue)}
        </button>
        {upgrades.map((upgrade) => (
          <Upgrade key={upgrade.id} {...upgrade} onPurchase={() => dispatch(purchaseUpgrade(upgrade.id))} />
        ))}
        </div>
    </div>
  );
}

export default Building;
