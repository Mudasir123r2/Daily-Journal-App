import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children}){
  const { user, loading} = useAuth();
  if(loading) return children 
  return user ? children : <Navigate to="/login" />;
}