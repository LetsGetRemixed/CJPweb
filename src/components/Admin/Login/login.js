import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";

const { REACT_APP_ADMIN_USERNAME, REACT_APP_ADMIN_PASSWORD } = process.env;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual authentication logic
    if (username === REACT_APP_ADMIN_USERNAME && password === REACT_APP_ADMIN_PASSWORD) {
      const token = "your-auth-token"; // Mock token
      onLogin(token);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
    <Navbar />
    <div
      className="relative flex min-h-screen items-center justify-center border-t-2 border-code-orange bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/loginbackground.jpg')`,
      }}
    >
      {/* Tint Overlay for Background Image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Login Form */}
      <div className=" w-full max-w-md relative">
                   
      <div className="w-full max-w-md rounded-lg bg-gray-800 border-2 border-code-orange p-8 shadow-md">
        <h2 className="mb-6 text-center font-heading text-2xl font-bold text-code-green">
          CJP WEB DEV LOGIN
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm text-white">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded bg-code-green py-2 text-white transition-colors hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>

    </div>

    </div>
  );
};

export default Login;
