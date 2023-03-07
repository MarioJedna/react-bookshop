import { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(""); // empty '' means homepage

  return (
    <div className="text-center">
      <div className="app column">
        <Header />
        <MainContent page={page} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
