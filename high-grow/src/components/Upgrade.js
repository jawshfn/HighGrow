// src/components/Upgrade.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseUpgrade } from '../redux/gameSlice';
import '../styles/Upgrade.css'; // Updated import statement

function Upgrade({ id, name, cost, effect, value }) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.game.currency); // Getting the current currency from the store
  
  const handlePurchase = () => {
    if (currency >= cost) {
      dispatch(purchaseUpgrade(id));
    }
  };

  return (
    <div className="upgrade">
      {/* Displaying "Upgrade" along with its updated cost */}
      <button onClick={handlePurchase}>Upgrade {cost}</button>
    </div>
  );
}

export default Upgrade;
