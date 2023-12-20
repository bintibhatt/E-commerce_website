import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "./ManageCookies";
// import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const cookie = getCookie("user");
  useEffect(() => {
    if (cookie) {
      setUser({
        ...user,
        username: cookie,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (user) => {
    const { name, value } = user;
    setUser({
      ...user,
      [name]: value,
    });
    if (user.username && user.password) {
      setCookie("user", user.username, 10);
    }
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setUser({
      username: "",
      password: "",
    });
    navigate("/", { replace: true });
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, cookie }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
