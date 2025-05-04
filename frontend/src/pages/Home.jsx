import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center gap-6">
  <h1 className="text-4xl font-bold text-red-500 text-center">Welcome to Daily Journal App</h1>
  <Link
    to="/dashboard"
    className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 transition duration-300"
  >
    Go to Dashboard
  </Link>
</div>

  );
};

export default Home;
