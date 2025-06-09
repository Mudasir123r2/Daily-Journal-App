import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function ViewEntry() {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/entries`)
      .then((res) => {
        const found = res.data.find((item) => item._id === id);
        setEntry(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch entry:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-opacity-50"></div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="text-red-500 text-xl">Entry not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-10 text-white">
      <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700">
        <h2 className="text-4xl font-extrabold text-red-500 mb-4">{entry.title}</h2>
        <p className="text-gray-300 mb-6 whitespace-pre-line leading-relaxed">{entry.content}</p>
        <p className="text-sm text-gray-500 mb-8">
          Created on: {new Date(entry.date).toLocaleString()}
        </p>
        <Link
          to={`/edit/${entry._id}`}
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-5 py-2 rounded-lg text-white font-medium text-sm"
        >
          Edit Entry
        </Link>
      </div>
    </div>
  );
}
