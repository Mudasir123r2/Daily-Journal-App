import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-6 h-[80vh]">
        <h1 className="text-4xl font-bold text-red-500">Welcome to Daily Journal App</h1>
      </div>
    </div>
  );
};

export default Home;