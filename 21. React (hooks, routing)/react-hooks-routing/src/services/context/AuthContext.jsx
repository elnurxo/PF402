import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("isAdmin");
    setIsAdmin(savedAdmin === "true");
    setLoading(false);
  }, []);

  const login = (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  const value = { isAdmin, login, logout, setIsAdmin, loading, setLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
