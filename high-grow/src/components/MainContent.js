// src/components/MainContent.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { useSelector } from 'react-redux';
import Building from './Building';
import CurrencyDisplay from './CurrencyDisplay';
import {formatNumber} from '../util/formatNumber';
import '../styles/MainContent.css'; // Importing CSS


function MainApp() {

  const { currency, buildings, upgrades } = useSelector((state) => state.game);
  const location = useLocation(); // Get the current location

  return (
    <div>
      <h1>Neon City</h1>
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
        {buildings.map((building) => (
          <div className="building-container" key={building.id}>
            <Building {...building} baseHarvestValue={building.harvestValue}upgrades={upgrades.filter(upgrade => upgrade.buildingId === building.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
