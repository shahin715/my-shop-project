import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 dark:bg-gray-800">
      <div className="bg-white dark:bg-slate-800 p-10 rounded-xl shadow-xl w-[80%] max-w-lg text-center space-y-6">
        {/* React Logo Section */}
        <div className="mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // React logo URL
            alt="React Logo"
            className="mx-auto w-24 h-24"
          />
        </div>

        {/* 404 Message */}
        <h1 className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">
          404
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Action Button */}
        <button
          onClick={handleGoHome}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;

