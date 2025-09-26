import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (target) => {
    if (location.pathname === "/" && (!location.hash || target === "/")) {
      // If on home and clicking home or if the current hash is empty, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/" && location.hash === target) {
      // If clicking on the same section, scroll to the top of that section
      const element = document.getElementById(target.substring(1));
      if (element) {
        const yOffset = -80; // Adjust this based on your fixed navbar height
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    } else {
      setIsOpen(false); // Close the menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleModalState = (event) => {
      setIsModalOpen(event.detail.isOpen);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('modalStateChange', handleModalState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('modalStateChange', handleModalState);
    };
  }, []);

  return (
    <nav className={`fixed left-0 top-0 z-[1000] w-full transition-all duration-300 ${
      isModalOpen 
        ? 'transform -translate-y-full opacity-0' 
        : isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50' 
          : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className="flex items-center group transition-all duration-300 hover:scale-105"
              onClick={() => handleNavLinkClick("/")}
            >
              <div className="relative">
                <img
                  src="imagelogo2.png"
                  alt="Company Logo"
                  className="mr-3 h-12 w-12 transition-all duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-code-orange/20 to-code-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-code-blue to-white bg-clip-text text-transparent group-hover:from-code-orange group-hover:via-code-green group-hover:to-code-blue transition-all duration-300">
                CJP Web Development
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/showcase"
              className="relative px-4 py-2 text-white font-medium transition-all duration-300 hover:text-code-orange group"
              activeClassName="text-code-orange"
              exact
              onClick={() => handleNavLinkClick("#showcase")}
            >
              <span className="relative z-10">Showcase</span>
              <div className="absolute inset-0 bg-gradient-to-r from-code-orange/10 to-code-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-code-orange to-code-green group-hover:w-full transition-all duration-300"></div>
            </NavLink>
            
           

            {/* CTA Button */}
            <NavLink
              to="/#contact-us"
              className="relative px-6 py-2 bg-gradient-to-r from-code-green to-code-blue text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-code-green/25 group"
              onClick={() => {
                handleNavLinkClick("#contact-us");
                setIsOpen(false);
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-code-orange to-code-green rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden relative z-50"
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer group">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                }`}
              ></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <NavLink
              to="/showcase"
              className="block px-4 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-code-orange/10 hover:to-code-green/10 hover:text-code-orange"
              activeClassName="text-code-orange bg-gradient-to-r from-code-orange/10 to-code-green/10"
              exact
              onClick={() => {
                handleNavLinkClick("#showcase");
                setIsOpen(false);
              }}
            >
              Showcase
            </NavLink>
            
            <NavLink
              to="/#contact-us"
              className="block px-4 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-code-orange/10 hover:to-code-green/10 hover:text-code-orange"
              activeClassName="text-code-orange bg-gradient-to-r from-code-orange/10 to-code-green/10"
              onClick={() => {
                handleNavLinkClick("#contact-us");
                setIsOpen(false);
              }}
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/#contact-us"
              className="block px-4 py-3 bg-gradient-to-r from-code-green to-code-blue text-black font-bold rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-code-green/25"
              onClick={() => {
                handleNavLinkClick("#contact-us");
                setIsOpen(false);
              }}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
