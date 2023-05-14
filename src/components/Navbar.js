import React from 'react';
import ReactDOM from 'react-dom';

import logo from '../images/react-icon-small.png';

export default function Navbar() {
    return (
        <div className='Navbar1'>
            <img src={logo} alt='React Icon'></img>
            <h1 className='NavbarLeft'>ReactFacts</h1>
            <h1 className='NavbarText'>React Course - Project 1</h1>

        </div>
    )
}