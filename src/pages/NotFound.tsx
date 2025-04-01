
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-eventify-purple mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <Link to="/">
            <Button className="bg-eventify-purple hover:bg-eventify-darkPurple">
              Return to Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline">
              Browse Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
