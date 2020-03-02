import React from "react";
import History from './'
import styled from 'styled-components';

const Controls = styled.div`
border: 1px solid blue;
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
            <Controls>
                <h2 >Game Controls</h2>
                <p><button>W</button> = North</p>
                <p><button>A</button> = West</p>
                <p><button>S</button> = South</p>
                <p><button>D</button> = East</p>
            </Controls>
        </Container>
    )
}


export default Game