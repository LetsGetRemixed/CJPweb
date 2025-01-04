import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaDollarSign, FaGlobe, FaTasks, FaCalendarAlt, FaFolderOpen, FaClock, FaList } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Client Info", path: "/client-info", icon: <FaUser /> },
    { name: "Profit Page", path: "/profit-page", icon: <FaDollarSign /> },
    { name: "Company Websites", path: "/company-websites", icon: <FaGlobe /> },
    { name: "Leads", path: "/leads", icon: <FaTasks /> },
    { name: "Current Task", path: "/current-task", icon: <FaList /> },
    { name: "Calendar", path: "/calendar", icon: <FaCalendarAlt /> },
    { name: "References", path: "/references", icon: <FaFolderOpen /> },
    { name: "Timepunch", path: "/timepunch", icon: <FaClock /> },
  ];

  return (
    <div
      className={`relative h-screen bg-gray-800 text-white shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute -right-6 top-4 bg-code-orange text-black p-3 rounded-full shadow-md focus:outline-none hover:scale-110 ${
          isOpen ? "rotate-0" : "rotate-180"
        } transition-transform duration-300`}
        style={{ zIndex: 10 }}
      >
        {isOpen ? "➖" : "➕"}
      </button>

      {/* Sidebar Content */}
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-center py-6 border-b border-gray-700">
          <img
            src="/imagelogo2.png"
            alt="Logo"
            className={`h-12 w-12 transition-transform duration-300 ${
              isOpen ? "mr-3" : "mx-auto"
            }`}
          />
          {isOpen && (
            <span className="font-heading text-xl font-bold text-code-green">
              Dashboard
            </span>
          )}
        </div>

        {/* Menu Items */}
        <nav className="mt-4 flex-grow">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-code-orange text-black"
                    : "hover:bg-gray-700 hover:text-code-blue"
                }`
              }
            >
              <div className="text-lg">{item.icon}</div>
              {isOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;



