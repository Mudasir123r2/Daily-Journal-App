import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center bg-[#111] px-6 py-4 text-white">
      <Link to="/" className="text-xl font-bold text-red-500">Daily Journal</Link>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="hover:text-red-500">Login</Link>
            <Link to="/register" className="hover:text-red-500">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-red-500">Dashboard</Link>
            <button onClick={logout} className="hover:text-red-500">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;