import React from 'react'

function Map({world, currentRoom}){
     console.log(world)
     console.log(currentRoom)

     // className = {item.id === currentRoom.id ? "active" : ""}
     return (
          <div className="game-visual-container">
               Hello I am Map
               <div>{world.map((item) => {
                    return (<div className={item.id === currentRoom.id ? "active" : "inactive"}>{item.title}</div>)
               })}
               </div>
          </div>)
}

export default Map