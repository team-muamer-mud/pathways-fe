import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axioswithAuth'

const History = (props) => {
const [description, setDescription] = useState("")
const [title, setTitle] = useState("")


useEffect(() => {

})

useEffect(() => {
     axiosWithAuth()
     .get(`https://pathwaystodestiny.herokuapp.com/api/adv/init`)
          .then(res => {
               console.log(res.data, "WORLDWORLD")
               setDescription(res.data.description)
               setTitle(res.data.title)
          })
},[])

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