import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-stone-700 dark:text-white">
          404
        </h1>
        <p className="text-2xl mt-4 text-gray-500 dark:text-gray-300">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600 transition duration-300 dark:bg-rose-600 dark:hover:bg-rose-500"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

export default Error;
