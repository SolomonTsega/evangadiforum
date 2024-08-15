import React, { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../../API/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState({ username: "" });

  // Update the token and store it in localStorage
  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  // Clear the token and remove it from localStorage
  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Fetch user information based on the token
  const fetchUserInfo = async () => {
    if (token) {
      try {
        const response = await axiosInstance.get("/api/user/checkUser", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser({
          username: response.data.username,
          userid: response.data.userid,
        });
      } catch (error) {
        console.error("Error fetching user info:", error);
        clearToken(); 
      }
    }
  };

  // Fetch user info whenever the token changes
  useEffect(() => {
    fetchUserInfo();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, updateToken, clearToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
