import React from "react";
// import History from './'
import styled from 'styled-components';

const Controls = styled.div`
border: 1px solid blue;
width:100%;
align-items: left;
`;

const Container = styled.div`
border: 1px solid red;
display:flex;
justify-content: flex-end;
height: 70vh; 
width:15%;
`

const Game = props => {
    return(
        <Container>
            <Controls>
                <h2 >Game Controls</h2>
                <p><button>North</button></p>
                <p><button>West</button></p>
                <p><button>South</button></p>
                <p><button>East</button></p>
            </Controls>
        </Container>
    )
}


export default Game