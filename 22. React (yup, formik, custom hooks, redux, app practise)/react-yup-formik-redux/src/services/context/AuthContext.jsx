import React, { createContext, useState, useContext, useEffect } from "react";
import authController from "../api/authApi.js";

// Create Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.id) {
      authController
        .getOne(savedUser.id)
        .then((data) => {
          setUser(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const login = (credentials) => {
    authController.login(credentials).then((x) => {
      if (x.data.length > 0) {
        setUser(x.data[0]);
        localStorage.setItem(
          "user",
          JSON.stringify({
            role: x.data[0].role,
            id: x.data[0].id,
          })
        );
      }
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(null));
  };

  const value = { user, login, logout, setUser, loading, setLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
