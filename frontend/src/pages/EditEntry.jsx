import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function EditEntry(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axiosInstance.get(`/entries/${id}`).then(res => {
      const entry = res.data.find(item => item._id === id);
      if (entry) {
        setTitle(entry.title);
        setContent(entry.content);
      }
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axiosInstance.put(`/entries/${id}`, { title, content });
    navigate("/dashboard");
  };

  return (
    <div className="p-6 bg-[#1e1e1e] min-h-screen text-white">
      <h2 className="text-2xl text-red-500 font-bold mb-4">Edit Entry</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-600 bg-[#2c2c2c] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-600 bg-[#2c2c2c] text-white p-3 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button type="submit" className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded shadow">
          Update
        </button>
      </form>
    </div>
  );
}

