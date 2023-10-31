import { useSelector } from "react-redux";// src/components/CurrencyDisplay.js
import { formatNumber } from "../util/formatNumber";
function CurrencyDisplay() {
  const currency = useSelector(state => state.game.currency);

    return (
        <h2>
            ${formatNumber(currency)}
        </h2>
    );
  }
  export default CurrencyDisplay;
  