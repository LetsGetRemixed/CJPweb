import React, { useState } from 'react';
import '../Navbar/navbar.css'; // Link to the CSS file specific for the Navbar

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="imagelogo2.png" alt="Company Logo" className="company-logo" />
                <span className="company-name">CJP Web Development</span>
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#showcase">Showcase</a></li>
                <li><a href="#meet-the-team">Meet the Team</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
