import React, { useEffect, useState } from 'react'


const History = ({title, description, error, players}) => {



useEffect(() => {

})



     return(
          <div className="history-container">
               <p className="game-subtitle">Console</p>
               <div className="description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{error}</p>
                    {players.length > 0 ? <p>Players here: {players.map(player => <span key={player}>{`${player}, `}</span>)}</p> : null}
               </div>
          </div>
     )
}

export default History