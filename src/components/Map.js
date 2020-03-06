import React, {useState, useEffect} from 'react'
import "react-vis/dist/style.css"
import thatsfunny from "./veryfunny.png"

import {
     XYPlot,
     MarkSeries,
     LineMarkSeries,
     VerticalGridLines,
     HorizontalGridLines,
} from "react-vis";

function Map({world, currentRoom}){
     const [paths, setPaths] = useState([])
     useEffect( _ => {
          const roomIds = [currentRoom.n_to,currentRoom.e_to,currentRoom.s_to,currentRoom.w_to]
          const newPaths = []
          if (currentRoom.x !== undefined) {
               newPaths.push({x: currentRoom.x, y: currentRoom.y})
               roomIds.map(id => {
                    if (id) {
                         const roomObj = world.find(room => room.id === id)
                         newPaths.push({x: roomObj.x, y: roomObj.y})
                         newPaths.push({x: currentRoom.x, y: currentRoom.y})
                    }
               })
               setPaths([...paths, ...newPaths])
          }
     },[currentRoom])

     const corners = [
          { x: 10, y: 10 },
          { x: -1, y: 10 },
          { x: 10, y: -1 },
          { x: -1, y: -1 },
        ];

     // className = {item.id === currentRoom.id ? "active" : ""}
     return (
          <div className="game-visual-container">
               <XYPlot height={427} width={600}>
                    <LineMarkSeries 
                         lineStyle={{ stroke: '#69aa63', strokeWidth: '3px' }}
                         markStyle={{stroke: "#3c692e"}}
                         data={paths} 
                    />
                    {currentRoom.x != undefined? 
                         <MarkSeries
                              className="player-marker"
                              strokeWidth={14}
                              data={[{ x: currentRoom.x, y: currentRoom.y}]}
                              color="#e4582e"
                              markStyle={{backgroundImage: "url(veryfunny.png)"}}
                         />
                    : null}
                    
                    <img src={thatsfunny} style={{position: "absolute", height: "50px", width: "50px", left: `${currentRoom.x * 50 + 65}px`, bottom: `${currentRoom.y * 34 +50}px` }} />

                    <MarkSeries
                         className="corners"
                         strokeWidth={0.5}
                         data={corners}
                    />
               </XYPlot>
          </div>)
}

export default Map