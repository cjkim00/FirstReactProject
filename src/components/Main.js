import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/react-icon-small.png';
import background from '../images/react-icon-large.png'

export default function Main() {
    return (
        <div className='Main'>
            <h1 className='ListHeader'>Fun facts about React</h1>
            <img src ={background} alt = 'background image' className='BackgroundImage'></img>
            <ul className='List'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>

            </ul>
        </div>
    )
}