import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="fixed left-0 top-0 z-[1000] flex w-full items-center justify-between bg-gray-900 p-4 shadow-md">
      <div key="home" className="flex items-center text-xl text-white">
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => handleNavLinkClick("/")}
        >
          <img
            src="imagelogo2.png"
            alt="Company Logo"
            className="mr-2 h-10 w-10"
          />
          <span className="text-lg">CJP Web Development</span>
        </NavLink>
      </div>
      <div
        className="flex cursor-pointer flex-col md:hidden"
        onClick={toggleMenu}
      >
        <span
          className={`my-1 block h-1 w-6 bg-white transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45 transform" : ""}`}
        ></span>
        <span
          className={`my-1 block h-1 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`my-1 block h-1 w-6 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45 transform" : ""}`}
        ></span>
      </div>
      <ul
        className={`fixed left-0 w-full transform space-y-4 bg-gray-900 text-center transition-transform duration-300 ease-in-out ${isOpen ? "top-16 translate-y-2 opacity-100" : "top-0 -translate-y-full opacity-0"} md:relative md:right-0 md:top-0 md:flex md:translate-y-0 md:items-center md:justify-end md:space-x-24 md:space-y-0 md:bg-transparent md:opacity-100`}
      >
        <li>
          <NavLink
            to="/construction" // Adjust the link for the Showcase section
            className="block py-4 text-lg text-white hover:text-code-orange"
            activeClassName="text-code-orange"
            exact
            onClick={() => handleNavLinkClick("#showcase")}
          >
            Showcase
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/construction" // Adjust the link for the Meet the Team section
            className="block py-4 text-lg text-white hover:text-code-orange"
            activeClassName="text-code-orange"
            onClick={() => handleNavLinkClick("#meet-the-team")}
          >
            Meet the Team
          </NavLink>
        </li>
        <li key="contact">
          <NavLink
            to="/#contact-us"
            className="block py-4 text-lg text-white hover:text-code-orange"
            activeClassName="text-code-orange"
            onClick={() => handleNavLinkClick("#contact-us")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
