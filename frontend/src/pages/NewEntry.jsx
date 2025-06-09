import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate, Link } from "react-router-dom";

export default function NewEntry() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/entries", { title, content });
    navigate("/dashboard");
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-2 py-10 text-white flex items-center justify-center">
  <div className="max-w-3xl w-full bg-black/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 -mt-16">
    <h2 className="text-4xl font-extrabold text-red-500 mb-8">New Entry</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Title"
        className="w-full border border-gray-700 bg-black/30 text-white p-4 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="w-full border border-gray-700 bg-black/30 text-white p-4 rounded-lg h-48 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
