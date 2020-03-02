import React from "react";
import styled from 'styled-components';
import Controls from './controls.js'


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