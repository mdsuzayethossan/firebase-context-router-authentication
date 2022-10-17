import React from "react";
import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="flex items-center h-screen sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <h2 className="mb-5 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Error</span>
          {error.status}
        </h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-3xl">{error.statusText || error.message}</p>
        <Link
          to="/"
          rel="noopener noreferrer"
          className="px-8 py-3 font-semibold rounded bg-primary text-white"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
