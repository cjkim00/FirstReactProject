import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import Navbar from './components/Navbar';

export default function AppComponent() {
    return (
        <div className='AppComponent'> 
            <Navbar />
            <Main /> 
        </div>
    )
}