import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/navBar.js";
import Game from "./components/controls"

function App() {
  return (
    <div className="App">

      <Nav/>
      <Game/>
    </div>
  );
}

export default App;
