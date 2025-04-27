import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../sections/Navbar/AuthContext";

const usersData = {
  users: [
    { email: "user@example.com", password: "userpassword123" },
    { email: "admin@example.com", password: "adminpassword456" },
  ],
};

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usersData.users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (!user) {
      alert("Invalid email or password!");
      return;
    }

    login(user.email);
    navigate("/");
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

