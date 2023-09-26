import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigate = (path) => {
        setIsOpen(false); // Cierra el menú al hacer clic en un enlace
        navigate(path);
    };

    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <nav id="nav" className={`nav ${isOpen ? 'open' : ''}`}>
            <p onClick={() => handleNavigate('/')} >Home</p>
                <p onClick={() => handleNavigate('/about')} >About</p>
                <p onClick={() => handleNavigate('/skills')} >Skills</p>
                <p onClick={() => handleNavigate('/resume')} >Resume</p>
            </nav>
        </div>
    );
}

export default Navbar;
