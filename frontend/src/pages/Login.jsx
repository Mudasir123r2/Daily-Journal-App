import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/loginSchema";
import { useState } from "react";

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
        navigate("/dashboard");
      } catch (err) {
        console.error("Login failed:", err);
        alert("Login failed. Please check your credentials.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f1f1f] px-4">
      <div className="w-full max-w-md bg-[#2a2a2a] text-white p-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="example@mail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 rounded-md bg-[#1e1e1e] border ${
                errors.email && touched.email ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 rounded-md bg-[#1e1e1e] border ${
                errors.password && touched.password ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            {errors.password && touched.password && (
              <p className="text-sm text-red-400 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 mt-4 bg-red-600 hover:bg-red-700 transition duration-200 rounded-md text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
