import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #fffff;
    position: sticky;
    top: 0;
    padding: 0.25em 1em 0.25em 1em;
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;

const NavTitle = styled.h3`
    padding-left: 1em;
    font-weight: bold;
    font-size: 2rem;

`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
`;


const StyledLink = styled(Link)`
    padding-right: 12px;
    `

const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
               <NavTitle>Pathways to Destiny</NavTitle>
           </NavLeft>
           <NavRight>
               <StyledLink to="/register">Sign Up</StyledLink>
               <StyledLink to="/login">Login</StyledLink>

           </NavRight>
       </NavBar>
    );
}

export default Nav;