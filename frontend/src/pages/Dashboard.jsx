import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axiosInstance.get("/")
      .then(res => setEntries(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-[#1e1e1e] min-h-screen text-white">
  <h2 className="text-3xl text-red-500 font-bold mb-4">Dashboard</h2>
  <Link to="/new" className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">+ New Entry</Link>

  <div className="mt-6 space-y-4">
    {entries.map(entry => (
      <div key={entry._id} className="border border-gray-700 p-4 rounded bg-[#2c2c2c] shadow">
        <h3 className="text-xl font-bold">{entry.title}</h3>
        <p className="text-sm text-gray-400">{new Date(entry.date).toLocaleString()}</p>
        <Link to={`/view/${entry._id}`} className="text-red-400 mt-2 inline-block hover:underline">View</Link>
      </div>
    ))}
  </div>
</div>
      );
};

export default Dashboard;
