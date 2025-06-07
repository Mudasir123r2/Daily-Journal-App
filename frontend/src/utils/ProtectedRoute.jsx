import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }){
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}