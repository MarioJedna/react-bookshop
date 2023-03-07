import { useState } from "react";
import TopMenu from "./TopMenu";
// import header.scss

export default function Header() {
  const [testValue, setTestValue] = useState(null);

  return (
    <header className="header">
      <div className="header__sitename">Mario's Books</div>

      <div>last menu item clicked: {testValue}</div>

      <TopMenu currentItem={"about"} setTestValue={setTestValue} />
    </header>
  );
}
