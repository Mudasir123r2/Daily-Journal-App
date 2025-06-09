import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/entries")
      .then((res) => setEntries(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-10 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-extrabold text-red-500 tracking-tight">Dashboard</h2>
          <Link
            to="/new"
            className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 px-5 py-2 rounded-lg text-white font-medium text-sm"
          >
            + New Entry
          </Link>
        </div>

        {/* Spinner while loading */}
        {loading ? (
          <div className="flex justify-center mt-20">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          // Entries List
          <div className="space-y-4">
            {entries.length === 0 ? (
              <p className="text-gray-400 text-sm text-center mt-20">
                No entries found. Start by adding a new one.
              </p>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry._id}
                  className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md shadow-lg transition-all hover:border-red-500"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{entry.title}</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    {new Date(entry.date).toLocaleString()}
                  </p>
                  <div className="flex gap-6 text-sm">
                    <Link
                      to={`/view/${entry._id}`}
                      className="text-red-400 hover:underline font-medium"
                    >
                      View
                    </Link>
                    <Link
                      to={`/delete/${entry._id}`}
                      className="text-red-500 hover:underline font-medium"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
