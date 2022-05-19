import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticate] = useState(false); //false => not login

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsAuthenticate(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticate(true);
  };

  const logout = () => {
    setIsAuthenticate(false);
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
