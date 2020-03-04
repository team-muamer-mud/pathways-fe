import React, {useState, useEffect} from 'react'
import "react-vis/dist/style.css"

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
          if (currentRoom.x) {
               newPaths.push({x: currentRoom.x, y: currentRoom.y})
          
               roomIds.map(id => {
                    if (id) {
                         const roomObj = world.find(room => room.id === id)
                         newPaths.push({x: roomObj.x, y: roomObj.y})
                         newPaths.push({x: currentRoom.x, y: currentRoom.y})
                    }
               })
               setPaths([...paths, ...newPaths])
               console.log(paths)
          }
     },[currentRoom])

     const corners = [
          { x: 10, y: 10 },
          { x: -1, y: 10 },
          { x: 10, y: -1 },
          { x: -1, y: -1 },
        ];
     console.log(world)
     console.log(currentRoom)

     // className = {item.id === currentRoom.id ? "active" : ""}
     return (
          <div className="game-visual-container">
               <XYPlot height={600} width={600}>
                    <LineMarkSeries 
                         lineStyle={{ stroke: 'black', strokeWidth: '3px' }}
                         data={paths} 
                    />

                    <MarkSeries
                         strokeWidth={18}
                         data={[{ x: currentRoom.x, y: currentRoom.y}]}
                         color="orange"
                    />

                    <MarkSeries
                         className="corners"
                         strokeWidth={0.5}
                         data={corners}
                    />

               </XYPlot>
          </div>)
}

export default Map