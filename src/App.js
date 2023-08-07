import React from "react";
import "./App.css";
import ClickIncrease from "./components/clickIncrease";
import HoverIncrease from "./components/hoverIncrease";
function App() {
  return (
    <div className="App">
      <ClickIncrease />
      <HoverIncrease />
    </div>
  );
}

export default App;
