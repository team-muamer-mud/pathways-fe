import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import {axiosWithAuth} from "./utils/axioswithAuth"
import RegistrationForm from './components/register'
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute';
import Game from './components/game'
import UserContext from "./contexts/UserContext";


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false )
  
  return (
    <UserContext.Provider value={{loggedIn, setLoggedIn}}>
      <div className="App">
        {loggedIn ? <Redirect to="/game" /> : null}
        <div>
          <Route exact path="/" component={RegistrationForm} />
          <Route path="/Login" component={Login} />
        </div>

        <div>
          <PrivateRoute path="/game" component={Game} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
