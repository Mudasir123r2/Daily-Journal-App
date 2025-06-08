// router/router.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../layout/Layout";
import ProtectedRoute from "../utils/ProtectedRoute";

import Home from "../pages/home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard";
import NewEntry from "../pages/newEntry";
import ViewEntry from "../pages/ViewEntry";
import EditEntry from "../pages/EditEntry";
import DeleteEntry from "../pages/DeleteEntry";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="new"
        element={
          <ProtectedRoute>
            <NewEntry />
          </ProtectedRoute>
        }
      />
      <Route
        path="view/:id"
        element={
          <ProtectedRoute>
            <ViewEntry />
          </ProtectedRoute>
        }
      />
      <Route
        path="edit/:id"
        element={
          <ProtectedRoute>
            <EditEntry />
          </ProtectedRoute>
        }
      />
      <Route
        path="delete/:id"
        element={
          <ProtectedRoute>
            <DeleteEntry />
          </ProtectedRoute>
        }
      />
      {/* 404 Page */}
      <Route path="*" element={<div className="text-center mt-10">404 Not Found</div>} />
    </Route>
  )
);

export default router;
