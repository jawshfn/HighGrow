// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hireManager, purchaseUpgrade } from './redux/gameSlice';
import Plant from './components/Plant';
import Upgrade from './components/Upgrade';
import ManagerPage from './components/ManagerPage';
import HomeScreen from './components/HomeScreen'; // Importing HomeScreen component
import './styles/App.css'; // Importing CSS

function App() {
  const dispatch = useDispatch();
  const { currency, plants, upgrades } = useSelector((state) => state.game);

  const handleHire = (managerId) => {
    dispatch(hireManager(managerId));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/managers">Managers</Link>
        </nav>
        <div className="currency-container">
          <h2>Currency: {currency}</h2>
        </div>
        <Routes>
          <Route path="/managers" element={<ManagerPage onHire={handleHire} />} />
          <Route path="/game" element={
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
          } />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
