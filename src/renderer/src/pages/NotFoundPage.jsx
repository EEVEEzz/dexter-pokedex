import React from "react";
import { FaSadCry } from "react-icons/fa";
import Spinner from "../components/layout/Spinner";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="hero">
      <Meta title={`NOT FOUND`} />
      <div className="text-center her-content">
        <div className="max-w-lg">
          <h1 className="text-xl font-bold mb-6">404 | Page Not Found</h1>
          <Spinner className="inline mb-5 text-8xl" />
          <h1 className="text-lg mt-5 font-bold mb-6">
            nope.. not the page you're looking for...
          </h1>
          <Link to={"/"} className="btn btn-sm btn-primary font-bold">
            let's go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
