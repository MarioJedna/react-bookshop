import { useState } from "react";
import TopMenu from "./TopMenu";
import CurrencySelection from "./CurrencySelection";
import "./Header.scss";

export default function Header() {
  const [testValue, setTestValue] = useState(null);

  return (
    <header className="header">
      <div className="header__sitename">Mario's Books</div>
      <CurrencySelection />
      <TopMenu currentItem={"about"} setTestValue={setTestValue} />
    </header>
  );
}
