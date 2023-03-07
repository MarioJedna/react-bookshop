import { useReducer, useState } from "react";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import CurrencyContext from "./CurrencyContext";
import Context from "./Context";
import reducer from "./reducer";

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(""); // empty '' means homepage
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "eur"
  );
  const [exchangeRate, setExchangeRate] = useState(1);

  const initialContextValue = {
    user: null,
    theme: "light",
    language: "en",
    currency: "USD",
    authHash: null,
    shoppingCart: [],
  };

  const [contextValue, setContextValue] = useReducer(
    reducer,
    initialContextValue
  );

  return (
    <Context.Provider
      value={{
        context: contextValue,
        changeContext: setContextValue,
      }}
    >
      <CurrencyContext.Provider
        value={{
          currency, // "EUR"
          setCurrency, // the means to change 'EUR' to something else
          exchangeRate,
          setExchangeRate,
        }}
      >
        <div className="text-center">
          <div className="app column">
            <Header />
            <MainContent page={page} />
            <Footer />
          </div>
        </div>
      </CurrencyContext.Provider>
    </Context.Provider>
  );
}

export default App;
