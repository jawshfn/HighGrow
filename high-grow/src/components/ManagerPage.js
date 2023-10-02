// src/components/ManagerPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hireManager } from '../redux/gameSlice';
import '../styles/ManagerPage.css'; // Importing CSS
import { formatNumber } from '../util/formatNumber';

function ManagerPage({ onHire }) {
  const dispatch = useDispatch();
  const { currency, managers } = useSelector((state) => state.game);

  const handleHire = (managerId) => {
    dispatch(hireManager(managerId));
    if (onHire) onHire(managerId);
  };

  return (
    <div className="manager-page">
      <nav>
        <Link to="/game">Home</Link> {/* Updated Link */}
        <Link to="/managers">Managers</Link>
      </nav>
      <div className="currency-container">
        <h2>Currency: {formatNumber(currency)}</h2>
      </div>
      <h1>Managers</h1>
      <div className="managers-container">
        {managers.map((manager) => (
          <div className="manager-container" key={manager.id}>
            <p>{manager.name}</p>
            <p>Cost: {manager.cost}</p>
            <button onClick={() => handleHire(manager.id)} className="hire-button">Hire</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagerPage;
