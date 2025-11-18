import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16">
      
      {/* Illustration */}
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600 tracking-wider">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold text-gray-900">
          Page Not Found
        </p>

        <p className="mt-2 text-gray-600 max-w-md">
          The page you’re looking for doesn’t exist or was moved.  
          Don’t worry - you can always return home.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Go Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
