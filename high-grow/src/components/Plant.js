// src/components/Plant.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { harvest, updateProgress } from '../redux/gameSlice';
import '../styles/Plant.css'; // Updated import statement
import ProgressBar from '../components/ProgressBar';
import {calculateHarvestValue} from '../helpers';
import { formatNumber } from '../util/formatNumber';

function Plant({ id, name, growthTime, progress, lastUpdated, level, baseHarvestValue }) {
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
  
  return (
    <div className="plant">
      <h3>{name}</h3>
      <p>Level: {level}</p>
      <p>Growth Time: {growthTime ? (growthTime / 1000).toFixed(2) : 0} s</p> {/* added check here */}
      <p>Currency per Second: {cps}</p>
      <div className="progress-container">
      <div className="progress-label">
          {progressPercentage.toFixed(2)}% {/* Render progress percentage */}
        </div>
        <ProgressBar progress={progress} max={growthTime} />
      </div>
      {progressPercentage < 100 ? (
        <p>Growing...</p>
      ) : (
        <button onClick={() => dispatch(harvest())}>Harvest {formatNumber(harvestValue)}</button>
      )}
    </div>
  );
}

export default Plant;
