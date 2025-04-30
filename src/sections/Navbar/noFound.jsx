import React from 'react';
import { Link } from 'react-router-dom';

const NoFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-6xl font-bold text-red-500 dark:text-red-400 mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 font-semibold text-lg"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NoFound;

