import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function EditEntry() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/entries/${id}`)
      .then((res) => {
        const entry = res.data;
        if (entry) {
          setTitle(entry.title);
          setContent(entry.content);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axiosInstance.put(`/entries/${id}`, { title, content });
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-10 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full bg-black/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 -mt-16">
        <h2 className="text-4xl font-extrabold text-red-500 mb-6">Edit Entry</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-700 bg-black/30 text-white p-4 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-700 bg-black/30 text-white p-4 rounded-lg h-48 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
          <div className="flex justify-between items-center">
            <Link
              to="/dashboard"
              className="px-5 py-2 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-black transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg text-white font-medium shadow-lg active:scale-95"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
