import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

// const NavBar = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     background: #ffff;
//     position: sticky;
//     top: 0;
//     padding: 0.25em 1em 0.25em 1em;
// `;

// const NavLeft = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const NavTitle = styled.h3`
//     padding: .2em;
//     font-weight: bold;
//     font-size: 2rem;
//     background: #946B28;
//     color:#F7C83C;
// `;


const Nav = () => {
    return (
        <div className="nav-container">
            <p className="nav-title">Pathways to Destiny</p>
        </div>
    );
}

export default Nav;