// src/components/Upgrade.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseUpgrade } from '../redux/gameSlice';
import '../styles/Upgrade.css'; // Updated import statement
import { formatNumber } from '../util/formatNumber';

function Upgrade({ id, name, cost, effect, value }) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.game.currency); // Getting the current currency from the store
  const canPurchase = currency >= cost;

   const handlePurchase = () => {
    if (currency >= cost) {
      dispatch(purchaseUpgrade(id));
    }
  };

  return (
    <div className="upgrade">
      {/* Displaying "Upgrade" along with its updated cost */}
      <button 
        className={`upgrade-button ${canPurchase ? '' : 'insufficient-funds'}`} 
        onClick={handlePurchase} 
        disabled={!canPurchase}
      >
        +1 ${formatNumber(cost)}
        </button>
    </div>
  );
}

export default Upgrade;
