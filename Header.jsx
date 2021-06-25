import React from 'react';
import logo from './images/logo.jpg'
import './index.css';
function Header() {
    return (
        <>
            <div id="table">
                <img src={logo} alt="Not Found" />
                <h1>Prabhat Notebook</h1>
            </div>
        </>
    );
}

export default Header;