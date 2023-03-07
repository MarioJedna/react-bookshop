import { useContext, useEffect, useState } from "react";
import CurrencyContext from "./CurrencyContext";

export default function CurrencySelection() {
  const { currency, setCurrency } = useContext(CurrencyContext);
  //   const [currency, setCurrency] = useState(contextCurrency);
  const { exchangeRate, setExchangeRate } = useContext(CurrencyContext);
  //   const [exchangeRate, setExchangeRate] = useState(1);

  const handleSelect = (event) => {
    event; // the 'change' event
    event.target; // <select>
    event.target.value; // <whatever is selected>

    setCurrency(event.target.value);
  };

  const loadExchangeRates = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php"
    );
    const data = await response.json();

    const exchange_rate = data.find((rate) => {
      return rate.currency === currency;
    });

    setExchangeRate(exchange_rate.rate);
  };

  useEffect(() => {
    loadExchangeRates();
    console.log("currency changed:", currency, exchangeRate);
    localStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <div className="currency-selection form-select">
      Currency:
      <select value={currency} onChange={handleSelect}>
        <option value="CZK">CZK</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="IDR">IDR</option>
      </select>
      Exchange Rate: {exchangeRate}
    </div>
  );
}
