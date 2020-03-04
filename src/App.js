import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/navBar.js";
import Controls  from "./components/controls"
import History from './components/History'
import {axiosWithAuth} from "./utils/axioswithAuth"
import Map from './components/Map'

function App() {
  const [error, setError] = useState("")
  const [currentRoom, setCurrentRoom] = useState({title:'', description:''})
  const [world, setWorld] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get(`https://pathwaystodestiny.herokuapp.com/api/adv/init`)
      .then(res => {
        // console.log(res.data, "WORLDWORLD")
        setWorld(res.data.world)
        console.log(res.data)
        setCurrentRoom({ title: res.data.title, description: res.data.description, id: res.data.id, x:res.data.x, y:res.data.y})
      })
  }, [])

  const update = (move) => {
  
    axiosWithAuth()
    .post(`https://pathwaystodestiny.herokuapp.com/api/adv/move`, {direction: move})
            .then(res => {
              if (res.data.error_msg !== "" || res.data.error_msg !== undefined){
                setError(res.data.error_msg)
                setCurrentRoom(res.data)
              }
                console.log(res, "RES");
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
        <Map
        currentRoom={currentRoom} 
        world={world}/>
        <History 
        title={currentRoom.title}
        description={currentRoom.description}
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
