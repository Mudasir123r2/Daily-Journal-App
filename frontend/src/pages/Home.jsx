import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-8">
      
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-200 drop-shadow-lg">
          Welcome to Daily Journal App
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-md">
          Capture your thoughts, organize your life, and grow every day. Start your journaling journey with a secure and beautiful experience.
        </p>
        <Link
          to="/register"
          className="inline-block bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-200"
        >
          Get Started
        </Link>
      </div>

      {/* Right Section: Image with Cool Glow */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <div className="relative group">
          <img
            src="https://img.freepik.com/premium-vector/journals-minimal-vector-line-icon-3d-button-isolated-black-background-premium-vector_570929-1437.jpg"
            alt="Journal Entry"
            className="w-72 h-72 md:w-80 md:h-80 object-contain rounded-xl shadow-xl ring-2 ring-slate-500 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute -inset-1 rounded-xl opacity-20 bg-slate-500 blur-xl group-hover:opacity-40 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
}
