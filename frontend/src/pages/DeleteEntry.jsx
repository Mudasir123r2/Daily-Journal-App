import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function DeleteEntry(){
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await axiosInstance.get(`/entries/${id}`);
        const foundEntry = res.data.find(item => item._id === id);
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

  if (loading) return <div className="text-white p-6">Loading...</div>;
  if (!entry) return <div className="text-white p-6">Entry not found.</div>;

  return (
    <div className="p-6 bg-[#1e1e1e] min-h-screen text-white">
      <h2 className="text-2xl font-bold text-red-500">Are you sure you want to delete this entry?</h2>
      <p className="mt-4 text-gray-300">Title: <strong>{entry.title}</strong></p>
      <p className="text-gray-500 mt-2">{entry.content}</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
        >
          Yes, Delete
        </button>
        <Link
          to={`/view/${entry._id}`}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}