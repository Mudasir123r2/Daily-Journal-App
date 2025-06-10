import { useContext, useState, useEffect, createContext } from "react";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  const login = async (formData) => {
    try {
      const res = await axiosInstance.post("/users/login", formData);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  const register = async (formData) => {
    await axiosInstance.post("/users", formData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance
        .get("/users/me")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error("Error verifying token:",err.message);
          localStorage.removeItem("token");
          setUser(null);
        })
        .finally(() => {
          setLoading(false);  
        });
    } else {
      setLoading(false); 
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user, login, register, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
