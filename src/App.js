import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import {axiosWithAuth} from "./utils/axioswithAuth"
import RegistrationForm from './components/register'
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute';
import Game from './components/game'

function App() {

//   useEffect(() => {
//     axiosWithAuth()
//     .get(`https://pathwaystodestiny.herokuapp.com/api/adv/init`)
//          .then(res => {
//               console.log(res.data, "WORLDWORLD")
//               setDescription(res.data.description)
//               setTitle(res.data.title)
//          })
// },[])



  return (
    <div className="App">
      <div>
        <Route exact path="/" component={RegistrationForm} />
        <Route path="/Login" component={Login} />
      </div>
      <div>
        <PrivateRoute path="/game" component={Game} />
      </div>
    </div>
  );
}

export default App;
