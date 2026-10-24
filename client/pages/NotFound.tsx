import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-6 py-24 sm:px-10 lg:px-[73px]">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-white/70">Oops! Page not found</p>
      <Link to="/" className="text-white underline underline-offset-4 hover:text-white/70">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
