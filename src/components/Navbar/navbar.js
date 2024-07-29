import React from 'react';
import '../Navbar/navbar.css'; // Link to the CSS file specific for the Navbar

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="imagelogo2.png" alt="Company Logo" className="company-logo" />
                CJP Web Development
            </div>
        </nav>
    );
}

export default Navbar;