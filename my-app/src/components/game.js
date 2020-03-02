import React from "react";
import styled from 'styled-components';
import Controls from './components/controls.js'

const Controls = styled.div`
border: 1px solid green;
width:20%;
align-items: left;
`;

const Container = styled.div`
border: 1px solid red;
display:flex;
justify-content: flex-end;
height: 70vh; 
`

const Game = props => {
    return(
        <Container>
            <Controls/>
        </Container>
    )
}

export default Game