import React from 'react';
import './App.css';
import login from "./components/login";
import register from "./components/register";
import { Route } from "react-router-dom";
import Nav from "./components/navBar.js";
import Game from "./components/game.js"

function App() {
  return (
    <div className="App">

      <Nav/>
      <Route path="/login" component={login} />
      <Route path="/register" component={register} />
      <Game/>
    </div>
  );
}

export default App;
