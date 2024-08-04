import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 line z-[1000] flex items-center justify-between p-4 shadow-md">
            <div className="flex items-center text-white text-xl">
                <Link to="/" className="flex items-center">
                    <img src="imagelogo2.png" alt="Company Logo" className="w-10 h-10 mr-2" />
                    <span className="text-lg">CJP Web Development</span>
                </Link>
            </div>
            <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
                <span className={`block w-6 h-1 bg-white my-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white my-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </div>
            <ul className={`fixed left-0 w-full bg-gray-900 text-center space-y-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-2 top-16' : 'opacity-0 -translate-y-full top-0'} md:relative md:flex md:items-center md:justify-end md:space-x-24 md:space-y-0 md:top-0 md:right-0 md:bg-transparent md:translate-y-0 md:opacity-100`}>

                <li><a href="#showcase" className="block py-4 text-lg text-white hover:text-code-orange">Showcase</a></li>
                <li><a href="#meet-the-team" className="block py-4 text-lg text-white hover:text-code-orange">Meet the Team</a></li>
                <li><a href="#contact-us" className="block py-4 text-lg text-white hover:text-code-orange">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

