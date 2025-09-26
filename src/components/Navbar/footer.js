import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="imagelogo2.png"
              alt="Company Logo"
              className="mr-3 h-12 w-12"
            />
            <div>
              <h3 className="text-xl font-bold text-white">CJP Web Development</h3>
              <p className="text-gray-400 text-sm">Creating amazing web experiences</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 mb-6 md:mb-0">
            <NavLink
              to="/"
              className="text-gray-300 hover:text-code-orange transition-colors duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/showcase"
              className="text-gray-300 hover:text-code-orange transition-colors duration-300"
            >
              Showcase
            </NavLink>
            <NavLink
              to="/#contact-us"
              className="text-gray-300 hover:text-code-orange transition-colors duration-300"
            >
              Contact
            </NavLink>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="mailto:colbyperson@CJPWeb.com"
              className="text-gray-300 hover:text-code-green transition-colors duration-300 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              colbyperson@CJPWeb.com
            </a>
            <a
              href="tel:+15127865133"
              className="text-gray-300 hover:text-code-green transition-colors duration-300 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (512) 786-5133
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CJP Web Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
