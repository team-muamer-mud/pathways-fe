import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #ffff;
    position: sticky;
    top: 0;
    padding: 0.25em 1em 0.25em 1em;
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;

const NavTitle = styled.h3`
    padding: .2em;
    font-weight: bold;
    font-size: 2rem;
    background: #D2691E;
    color:yellow;
    

`;


const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
               <NavTitle>Pathways to Destiny</NavTitle>
           </NavLeft>
       </NavBar>
    );
}

export default Nav;