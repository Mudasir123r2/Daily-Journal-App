import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-400  shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-extrabold text-slate-200 tracking-wide">
            Daily Journal
          </h1>
          <p className="text-sm mt-1 text-gray-500">Your personal writing space</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link
            to="/"
            className="text-white hover:text-slate-400 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-white hover:text-slate-400 transition duration-300 font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-slate-400 transition duration-300 font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-slate-400 transition duration-300 font-medium"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Daily Journal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
