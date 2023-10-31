// src/components/ManagerPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hireManager } from '../redux/gameSlice';
import '../styles/ManagerPage.css'; // Importing CSS
import { formatNumber } from '../util/formatNumber';
import '../styles/ManagerPage.css';
import CurrencyDisplay from './CurrencyDisplay';

function ManagerPage({ onHire }) {
  const dispatch = useDispatch();
  const { currency, managers } = useSelector((state) => state.game);

  const handleHire = (managerId) => {
    dispatch(hireManager(managerId));
    if (onHire) onHire(managerId);
  };

return (
  <div>
    <div className="manager-page">
      <h1>Neon City</h1>
      <nav>
        <Link to="/game">Home</Link> {/* Updated Link */}
        <Link to="/achievements">Achievements</Link>
        <Link to="/managers">Managers</Link>
        
      </nav>
      <div className="currency-container">
      {(
        <CurrencyDisplay currency={formatNumber(currency)} /> // Use the new component
      )}
      </div>
      <h1>Managers</h1>
      <div className="managers-container">
        {managers.map((manager) => (
          <div className="manager-container" key={manager.id}>
    <p className="manager-name">{manager.name}</p>
    <button 
        onClick={() => handleHire(manager.id)} 
        className="hire-button"
        disabled={manager.isHired}
    >
        {manager.isHired ? "Already Hired" : "Hire"}
    </button>
    <p className="manager-cost">Cost: {manager.cost}</p>
</div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ManagerPage;
