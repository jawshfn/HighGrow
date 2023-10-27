// src/components/Manager.js
import React from 'react';
import '../styles/Manager.css'; // Importing CSS

function Manager({ id, name, cost, onHire, buildingId }) {
  return (
    <div className="manager">
      <h4>{name}</h4>
      <p>Cost: {cost}</p>
      <button onClick={onHire}>Hire</button>
    </div>
  );
}

export default Manager;
