import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavLinkClick = (target) => {
        if (location.pathname === '/' && (!location.hash || target === '/')) {
            // If on home and clicking home or if the current hash is empty, scroll to the top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (location.pathname === '/' && location.hash === target) {
            // If clicking on the same section, scroll to the top of that section
            const element = document.getElementById(target.substring(1));
            if (element) {
                const yOffset = -80; // Adjust this based on your fixed navbar height
                const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }
        } else {
            setIsOpen(false); // Close the menu after clicking
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 z-[1000] flex items-center justify-between p-4 shadow-md">
            <div key="home" className="flex items-center text-white text-xl">
                <NavLink to="/" className="flex items-center" onClick={() => handleNavLinkClick('/')}>
                    <img src="imagelogo2.png" alt="Company Logo" className="w-10 h-10 mr-2" />
                    <span className="text-lg">CJP Web Development</span>
                </NavLink>
            </div>
            <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
                <span className={`block w-6 h-1 bg-white my-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white my-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </div>
            <ul className={`fixed left-0 w-full bg-gray-900 text-center space-y-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-2 top-16' : 'opacity-0 -translate-y-full top-0'} md:relative md:flex md:items-center md:justify-end md:space-x-24 md:space-y-0 md:top-0 md:right-0 md:bg-transparent md:translate-y-0 md:opacity-100`}>
                <li>
                    <NavLink 
                        to="/construction"   // Adjust the link for the Showcase section
                        className="block py-4 text-lg text-white hover:text-code-orange"
                        activeClassName="text-code-orange"
                        exact
                        onClick={() => handleNavLinkClick('#showcase')}
                    >
                        Showcase
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/construction"  // Adjust the link for the Meet the Team section
                        className="block py-4 text-lg text-white hover:text-code-orange"
                        activeClassName="text-code-orange"
                        onClick={() => handleNavLinkClick('#meet-the-team')}
                    >
                        Meet the Team
                    </NavLink>
                </li>
                <li key="contact">
                    <NavLink 
                        to="/#contact-us"  
                        className="block py-4 text-lg text-white hover:text-code-orange"
                        activeClassName="text-code-orange"
                        onClick={() => handleNavLinkClick('#contact-us')}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
