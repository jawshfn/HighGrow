import { useSelector } from "react-redux";// src/components/CurrencyDisplay.js
function CurrencyDisplay() {
  const currency = useSelector(state => state.game.currency);

    return (
        <h2>
            ${currency}
        </h2>
    );
  }
  export default CurrencyDisplay;
  