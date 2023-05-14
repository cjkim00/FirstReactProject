import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Navbar  from './components/Navbar';
import Main from './components/Main';
import AppComponent from './AppComponent';

function Body() {
    return (
        <>
        <Navbar />
        <Main />        
        </>
    )
}

ReactDOM.render(<AppComponent />, document.getElementById("root"))