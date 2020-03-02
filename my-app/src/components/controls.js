import React from "react";
// import History from './'
import styled from 'styled-components';
import North from '../assets/north.png'
import West from '../assets/west.png'
import South from '../assets/South.png'
import East from '../assets/east.png'
import Chat from './chat'

const Controls = styled.div`
border: 1px solid blue;
width:20%;
justify-content:center;
height: 70vh; 
background-color:white;
display:flex;
flex-direction: column;
flex-wrap:wrap;
align-items: center;
`;

const Container = styled.div`
border: 1px solid red;
display:flex;
height: 70vh; 
width:100%;
background-color: #90EE90;
flex-wrap:wrap;
`
const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  background-color:white;
  flex-wrap:wrap;
  
`;

const Game = props => {
    return(
        <Container>
            <Controls>
                <h2 >Game Controls</h2>
                <StyledImg src={North} alt="North"></StyledImg>
                <p><button>North</button></p>
                <StyledImg src={West} alt="West"></StyledImg>
                <p><button>West</button></p>
                <StyledImg src={South} alt="South"></StyledImg>
                <p><button>South</button></p>
                <StyledImg src={East} alt="East"></StyledImg>
                <p><button>East</button></p>
            </Controls>
            <Chat/>
        </Container>
    )
}


export default Game