import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../utils/axioswithAuth"
// import History from './'
import styled from 'styled-components';
import North from '../assets/north.png'
import West from '../assets/west.png'
import South from '../assets/South.png'
import East from '../assets/east.png'
import Chat from './chat'



// const Controls = styled.div`
// border: 1px solid blue;
// width:50%;
// justify-content:center;
// height: 10vh; 
// background-color:white;
// display:flex;
// flex-direction: column;
// flex-wrap:wrap;
// align-items: center;
// `;

// const Container = styled.div`
// border: 1px solid red;
// display:flex;
// height: 70vh; 
// width:100%;
// background-color: #9ED08F;
// `
// const StyledImg = styled.img`
//   width: 25px;
//   height: 25px;
//   background-color:white;
//   flex-wrap:wrap;
// `;

const Game = props => {

    
    
    const update = (move) => {
        console.log('update')
        
        
        axiosWithAuth()
        .post(`https://pathwaystodestiny.herokuapp.com/api/adv/move`, {direction: move})
                .then(res => {
                    console.log(res, "RES");
                })
                .catch(err => 
                    console.log(err.response))
        
      }
    
        // const handleChange = e => {
        //     setMove({
        //         ...move,
        //         [e.target.move]: e.target.value
        //     })
        // }


    return(
            <div className="game-container">
                <p className="game-subtitle">Controls</p>
                    <div className="game-button-container">
                {/* <Chat/> */}
                    {/* <img className="game-buttons" src={West} alt="West" /> */}
                    <p><button onClick={_=>update("w")}  className="game-button west">⇦</button></p>
                    {/* <img className="game-buttons" src={North} alt="North" /> */}
                    <p><button onClick={_=>update("n")}  className="game-button north">⇧</button></p>
                    {/* <img className="game-buttons" src={South} alt="South" /> */}
                    <p><button onClick={_=>update("s")}  className="game-button south">⇩</button></p>
                    {/* <img className="game-buttons" src={East} alt="East" /> */}
                    <p><button onClick={_=>update("e")}  className="game-button east">⇨</button></p>
                </div>
            </div>
    )
}


export default Game