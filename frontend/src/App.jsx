import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { AuthProvider, } from "./context/AuthContext";



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
          <Route path="/delete/:id" element={ <ProtectedRoute> <DeleteEntry /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;