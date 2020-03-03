import React, { useEffect, useState } from 'react'


const History = ({title, description, error}) => {



useEffect(() => {

})



     return(
          <div className="history-container">
               <p className="game-subtitle">Console</p>
               <div className="description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{error}</p>
               </div>
          </div>
     )
}

export default History