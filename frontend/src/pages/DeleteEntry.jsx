import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../api/axiosInstance"; 

const DeleteEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await axios.get(`/entries/${id}`);
        setEntry(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching entry:", err);
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/entries/${id}`);
      navigate("/dashboard");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  if (!entry) {
    return <div className="text-center text-red-400 mt-10">Entry not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-4">
      <div className="bg-[#2c2c2c] p-8 rounded shadow-md max-w-lg w-full space-y-4">
        <h1 className="text-2xl font-bold text-red-500">Delete Entry</h1>
        <p>Are you sure you want to delete the following entry?</p>
        <div className="p-4 bg-[#1e1e1e] rounded border border-red-600">
          <h2 className="text-lg font-semibold text-red-400">{entry.title}</h2>
          <p className="text-sm text-gray-300 mt-2">{entry.content}</p>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Link to="/dashboard" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">
            Cancel
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEntry;
