import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axioswithAuth'

const History = ({title, description}) => {



useEffect(() => {

})



     return(
          <div className="history-container">
               <p className="game-subtitle">Console</p>
               <div className="description">
                    <h3>{title}</h3>
                    <p>{description}</p>
               </div>
          </div>
     )
}

export default History