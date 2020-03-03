import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/navBar.js";
import Controls  from "./components/controls"
import History from './components/History'
import {axiosWithAuth} from "./utils/axioswithAuth"
function App() {
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")

  const update = (move) => {
  
    axiosWithAuth()
    .post(`https://pathwaystodestiny.herokuapp.com/api/adv/move`, {direction: move})
            .then(res => {
              if (res.data.error_msg !== "" || res.data.error_msg !== undefined){
                setError(res.data.error_msg)
              }
                console.log(res, "RES");
                axiosWithAuth()
                .get(`https://pathwaystodestiny.herokuapp.com/api/adv/init`)
                     .then(res => {
                          console.log(res.data, "WORLDWORLD")
                          setDescription(res.data.description)
                          setTitle(res.data.title)
                          // setError(res.data.error_msg)
                          console.log(res.data.error_msg, "ERROR")
                     })
            })
            .catch(err => 
                console.log(err.response))
    
  }

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
      <div className="nav-bar-container">
        <Nav/>
      </div>
      <div className="upper-half-container">
        <div className="game-visual-container"></div>
        <History 
        title={title}
        description={description}
        error={error}/>
      </div>
      <div className="lower-half-container">
        <div className="inventory-container"><p className="game-subtitle inventory-title">Inventory</p></div>
        <Controls 
        update = {update}/>
      </div>
    </div>
  );
}

export default App;
