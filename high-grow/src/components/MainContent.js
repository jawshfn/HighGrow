// src/components/MainContent.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { useSelector } from 'react-redux';
import Plant from './Plant';
import CurrencyDisplay from './CurrencyDisplay';
import {formatNumber} from '../util/formatNumber';
import '../styles/MainContent.css'; // Importing CSS


function MainApp() {

  const { currency, plants, upgrades } = useSelector((state) => state.game);
  const location = useLocation(); // Get the current location

  return (
    <div>
      <h1>High Grow</h1>
      {location.pathname !== '/' && (
        <nav>
        <Link to="/game">Home</Link> {/* Updated Link */}
        <Link to="/managers">Managers</Link>
      </nav>
      )}
      <div className="currency-container">
      {location.pathname !== '/' && (
        <CurrencyDisplay currency={formatNumber(currency)} /> // Use the new component
      )}
      </div>
      <div className="game-container">
        {plants.map((plant) => (
          <div className="plant-container" key={plant.id}>
            <Plant {...plant} baseHarvestValue={plant.harvestValue}upgrades={upgrades.filter(upgrade => upgrade.plantId === plant.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
