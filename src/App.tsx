import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CompA } from "./CompA";
import { CompB } from "./CompB";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompA />
        <CompB />
      </header>
    </div>
  );
}

export default App;
