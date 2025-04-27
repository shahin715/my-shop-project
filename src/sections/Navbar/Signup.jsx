import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../sections/Navbar/AuthContext"; // Import Context
import Cookies from "js-cookie";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateToken = (email) => {
    const header = { alg: "HS256", typ: "JWT" };
    const payload = {
      email,
      exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
    };
    const base64Encode = (obj) => btoa(JSON.stringify(obj));
    return `${base64Encode(header)}.${base64Encode(payload)}.signature`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const newUser = {
      email: formData.email,
      password: formData.password,
    };
    localStorage.setItem("registeredUsers", JSON.stringify([...existingUsers, newUser]));

    // Generate Token and Save in Cookie
    const token = generateToken(formData.email);
    Cookies.set("authToken", token, { expires: 7 });

    // Auto login user into Context
    login(formData.email);

    alert("Signup successful! Welcome 🎉");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-10 w-[400px] animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400
              dark:border-gray-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400
              dark:border-gray-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400
              dark:border-gray-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600
            text-white py-2 rounded-md text-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 dark:text-green-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

