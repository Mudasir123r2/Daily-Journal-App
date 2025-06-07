import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Register(){
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border border-gray-700 bg-[#2c2c2c] rounded">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}