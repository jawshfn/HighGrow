// src/components/Plant.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { harvest, updateProgress } from '../redux/gameSlice';
import '../styles/Plant.css'; // Updated import statement

function Plant({ id, name, growthTime, progress, lastUpdated }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatching updateProgress action when component mounts
    dispatch(updateProgress());

    // Setting up an interval to dispatch updateProgress action periodically
    const intervalId = setInterval(() => {
      dispatch(updateProgress());
    }, 1000); // Updating every second

    // Clearing the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const progressPercentage = (progress / growthTime) * 100;

  return (
    <div className="plant">
      <h3>{name}</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      {progressPercentage < 100 ? (
        <p>Growing...</p>
      ) : (
        <button onClick={() => dispatch(harvest())}>Harvest</button>
      )}
    </div>
  );
}

export default Plant;
