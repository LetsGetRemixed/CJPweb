import { useState, useEffect } from "react";

const useLogin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication token in localStorage on initial load
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    // Save the token to localStorage and update authentication state
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear the token from localStorage and update authentication state
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useLogin;
