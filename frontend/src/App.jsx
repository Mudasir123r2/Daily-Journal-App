import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import NewEntry from "./pages/newEntry";
import ViewEntry from "./pages/ViewEntry";
import EditEntry from "./pages/EditEntry";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<NewEntry />} />
        <Route path="/view/:id" element={<ViewEntry />} />
        <Route path="/edit/:id" element={<EditEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
