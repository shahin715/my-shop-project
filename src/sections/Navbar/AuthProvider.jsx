import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { AuthContext } from "../../sections/Navbar/AuthContext"; // Import Context

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ email: decoded.email });
      } catch (error) {
        console.error("Invalid token", error);
      }
      
    }
  }, []);

  const login = (email) => {
    const token = generateToken(email);
    Cookies.set("authToken", token, { expires: 7 });
    localStorage.setItem("isLoggedIn", "true");
    setUser({ email });
  };

  const logout = () => {
    Cookies.remove("authToken");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Simple JWT generator (not secure, just for demo)
function generateToken(email) {
  const header = { alg: "HS256", typ: "JWT" };
  const payload = {
    email,
    exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
  };
  const base64Encode = (obj) => btoa(JSON.stringify(obj));
  return `${base64Encode(header)}.${base64Encode(payload)}.signature`;
}
