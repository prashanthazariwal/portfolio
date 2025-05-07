import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
