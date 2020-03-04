import React from 'react'
import "react-vis/dist/style.css"

import {
     XYPlot,
     MarkSeries,
     LineMarkSeries,
     VerticalGridLines,
     HorizontalGridLines,
} from "react-vis";

function Map({world, currentRoom}){
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
                         data={world} 
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