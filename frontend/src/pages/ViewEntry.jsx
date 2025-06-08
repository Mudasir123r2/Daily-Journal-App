import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function ViewEntry(){
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/entries`)
      .then(res => {
        const found = res.data.find(item => item._id === id);
        setEntry(found);
      });
  }, [id]);

  if (!entry) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-[#1e1e1e] min-h-screen text-white">
  <h2 className="text-3xl font-bold text-red-500">{entry.title}</h2>
  <p className="mt-2 text-gray-300">{entry.content}</p>
  <p className="mt-2 text-sm text-gray-500">{new Date(entry.date).toLocaleString()}</p>
  <Link to={`/edit/${entry._id}`} className="text-white bg-red-600 mt-4 inline-block px-4 py-2 rounded hover:bg-red-700 transition">Edit</Link>
</div>
  );
}