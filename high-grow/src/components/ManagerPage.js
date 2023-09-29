// src/components/ManagerPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useDispatch, useSelector } from 'react-redux';
import { hireManager } from '../redux/gameSlice';
import '../styles/ManagerPage.css'; // Importing CSS

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
        <Link to="/">Home</Link>
        <Link to="/managers">Managers</Link>
      </nav>
      <div className="currency-container">
        <h2>Currency: {currency}</h2>
      </div>
      <h1>Managers</h1>
      <div className="managers-container">
        {managers.map((manager) => (
          <div className="manager-container" key={manager.id}>
            <p>{manager.name}</p>
            <p>Cost: {manager.cost}</p>
            <button onClick={() => handleHire(manager.id)}>Hire</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagerPage;
