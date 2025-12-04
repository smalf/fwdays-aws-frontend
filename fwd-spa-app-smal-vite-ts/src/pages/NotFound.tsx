import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <section className="not-found">
      <h1>404 — Page Not Found</h1>
      <p>
        No route matches <code>{location.pathname}</code>.
      </p>
      <p>
        The page may have been moved, deleted, or the URL might be incorrect.
      </p>
      <Link to="/" className="btn">
        Go back to Home
      </Link>
    </section>
  );
};

export default NotFound;
