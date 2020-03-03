import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/navBar.js";
import Controls  from "./components/controls"
import History from './components/History'

function App() {
  return (
    <div className="App">
      <div className="nav-bar-container">
        <Nav/>
      </div>
      <div className="upper-half-container">
        <div className="game-visual-container">This is the game</div>
        <History />
      </div>
      <div className="lower-half-container">
        <div className="inventory-container">This is the inventory</div>
        <Controls />
      </div>
    </div>
  );
}

export default App;
