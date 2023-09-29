// src/components/ManagerPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import Manager from './Manager';

function ManagerPage({ onHire }) {
  // Getting managers from the Redux store
  const managers = useSelector((state) => state.game.managers);

  return (
    <div>
      <h2>Managers</h2>
      {/* Rendering all Manager components */}
      {managers.map((manager) => (
        <Manager key={manager.id} {...manager} onHire={() => onHire(manager.id)} />
      ))}
    </div>
  );
}

export default ManagerPage;
