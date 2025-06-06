import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

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
    <div className="p-6 bg-[#1e1e1e] min-h-screen text-white">
      <h2 className="text-2xl text-red-500 font-bold mb-4">New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-gray-600 bg-[#2c2c2c] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full border border-gray-600 bg-[#2c2c2c] text-white p-3 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded shadow">
          Submit
        </button>
      </form>
    </div>
  );
}
