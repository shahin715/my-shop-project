import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../sections/Navbar/AuthContext";
import * as CryptoJS from "crypto-js"; // Importing crypto-js for password hashing comparison
import Cookies from "js-cookie"; // To handle cookies

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me" checkbox
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    // If "Remember Me" was checked, pre-fill email from localStorage
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setFormData((prevData) => ({
        ...prevData,
        email: savedEmail,
      }));
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const user = existingUsers.find((user) => user.email === formData.email);

    if (!user) {
      alert("Invalid email or password!");
      return;
    }

    // Compare the entered password with the hashed password stored in localStorage
    const hashedPassword = CryptoJS.SHA256(formData.password).toString(); // Hash the entered password
    if (hashedPassword !== user.password) {
      alert("Invalid email or password!");
      return;
    }

    // If the "Remember Me" checkbox is checked, store email in localStorage
    if (rememberMe) {
      localStorage.setItem("email", formData.email); // Save email in localStorage
      Cookies.set("authToken", user.email, { expires: 7 }); // Save authToken in cookies for 7 days
      localStorage.setItem("isLoggedIn", "true"); // Store login status in localStorage
    } else {
      // If not "Remember Me", don't store the email
      localStorage.removeItem("email");
      Cookies.remove("authToken");
      localStorage.removeItem("isLoggedIn");
    }

    // Log the user in and redirect
    login(user.email);
    navigate("/"); // Redirect to home page after successful login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-10 w-[400px] animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">Login</h2>

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

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-600 dark:text-gray-400">
              Remember Me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600
            text-white py-2 rounded-md text-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 dark:text-green-400 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;




