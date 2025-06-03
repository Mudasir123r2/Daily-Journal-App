import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { AuthProvider, } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import NewEntry from "./pages/newEntry";
import ViewEntry from "./pages/ViewEntry";
import EditEntry from "./pages/EditEntry";
import Home from "./pages/home"



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/new" element={<ProtectedRoute><NewEntry /></ProtectedRoute>} />
          <Route path="/view/:id" element={<ProtectedRoute><ViewEntry /></ProtectedRoute>} />
          <Route path="/edit/:id" element={<ProtectedRoute><EditEntry /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;