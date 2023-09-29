// src/components/MainContent.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { useDispatch, useSelector } from 'react-redux';
import { hireManager, purchaseUpgrade } from '../redux/gameSlice';
import Plant from './Plant';
import Upgrade from './Upgrade';

function MainApp() {
  const dispatch = useDispatch();
  const { currency, plants, upgrades } = useSelector((state) => state.game);
  const location = useLocation(); // Get the current location

  return (
    <div>
      {location.pathname !== '/' && (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/managers">Managers</Link>
        </nav>
      )}
      {location.pathname !== '/' && (
        <div className="currency-container">
          <h2>Currency: {currency}</h2>
        </div>
      )}
      <div className="game-container">
        <h1>High Grow</h1>
        {plants.map((plant) => (
          <div className="plant-container" key={plant.id}>
            <Plant {...plant} />
            <div className="actions-container">
              {upgrades.map((upgrade) => (
                <Upgrade key={upgrade.id} {...upgrade} onPurchase={() => dispatch(purchaseUpgrade(upgrade.id))} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
