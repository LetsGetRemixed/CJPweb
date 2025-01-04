import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-heading text-code-green mb-4">
          Welcome to the Dashboard
        </h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default Dashboard;