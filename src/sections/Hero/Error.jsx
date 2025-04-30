import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r  from-teal-400 via-blue-500 to-indigo-600 text-black">
      <div className="relative text-center p-8 bg-white dark:bg-white bg-opacity-20 rounded-lg shadow-2xl max-w-lg w-full">
        <h1 className="text-6xl font-bold mb-6 animate__animated animate__fadeIn">404</h1>
        <p className="text-3xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Page Not Found
        </p>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Oops! The page you're looking for doesn't exist. But don't worry, let's get you back to safety.
        </p>
        <Link to="/" className="text-lg font-semibold text-blue-400 hover:text-blue-500">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error; 
