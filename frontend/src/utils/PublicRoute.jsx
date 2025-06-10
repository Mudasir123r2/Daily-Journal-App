import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  // If user is logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  // If not logged in, allow access
  return children;
};

export default PublicRoute;
