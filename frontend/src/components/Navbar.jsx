import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black px-6 py-4 text-white shadow-md">
      <Link
        to="/"
        className="text-3xl font-extrabold text-slate-200 tracking-wide hover:text-slate-400 transition duration-300"
      >
        Daily Journal
      </Link>

      <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-md font-medium text-white transition duration-300 ring-1 ring-slate-600 hover:ring-2 shadow-sm"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-md font-medium text-white transition duration-300 ring-1 ring-gray-600 hover:ring-2 shadow-sm"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-md font-medium text-white transition duration-300 ring-1 ring-gray-600 hover:ring-2 shadow-sm"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-md font-medium text-white transition duration-300 ring-1 ring-slate-600 hover:ring-2 shadow-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
