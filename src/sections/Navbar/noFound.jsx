// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NoFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NoFound;
