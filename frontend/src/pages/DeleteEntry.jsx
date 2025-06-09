import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function DeleteEntry() {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await axiosInstance.get(`/entries`);
        const foundEntry = res.data.find((item) => item._id === id);
        setEntry(foundEntry);
      } catch (error) {
        console.error("Error fetching entry:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEntry();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/entries/${id}`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-opacity-50"></div>
      </div>
    );
  if (!entry)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="p-6 text-lg">Entry not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-10 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full bg-black/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 -mt-16">
        <h2 className="text-3xl font-extrabold text-red-500 mb-6">
          Are you sure you want to delete this entry?
        </h2>
        <p className="mt-2 text-gray-300">
          Title: <strong>{entry.title}</strong>
        </p>
        <p className="text-gray-500 mt-2 whitespace-pre-wrap">{entry.content}</p>
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg active:scale-95 transition"
          >
            Yes, Delete
          </button>
          <Link
            to={`/view/${entry._id}`}
            className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
