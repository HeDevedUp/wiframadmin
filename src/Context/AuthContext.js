import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userLoggedIn = useSelector((state) => state.authReducers.Authentication.isLoggedIn);

  useEffect(() => {
    setIsAuthenticated(userLoggedIn);
  }, [userLoggedIn]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
