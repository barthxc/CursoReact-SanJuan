import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <nav id="nav" className={`nav ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#aboutme">About</a>
                <a href="#skills">Skills</a>
                <a href="#resume">Resume</a>
            </nav>
        </div>
    );
}

export default Navbar;
