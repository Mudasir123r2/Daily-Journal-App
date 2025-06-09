import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/loginSchema";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await login(values);
        toast.success("Login successful!");
        navigate("/dashboard");
      } catch (error) {
        toast.error("Invalid credentials. Please try again.");
        console.error("Login Error:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-700 bg-black/50 backdrop-blur-md text-white transition-all duration-300 -mt-16">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-white tracking-tight">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-[#121212] border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-red-500 border-gray-600 focus-within:border-red-500 transition duration-200">
              <Mail className="text-gray-400 w-5 h-5" />
              <input
                name="email"
                type="email"
                id="email"
                placeholder="example@mail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-500"
              />
            </div>
            {errors.email && touched.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="flex items-center gap-3 bg-[#121212] border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-red-500 border-gray-600 focus-within:border-red-500 transition duration-200">
              <Lock className="text-gray-400 w-5 h-5" />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-500"
              />
            </div>
            {errors.password && touched.password && (
              <p className="text-xs text-red-400 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 mt-2 bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 rounded-lg text-white font-semibold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Redirect to Register */}
        <p className="mt-6 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red-400 hover:text-red-500 font-medium transition-colors duration-200"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
