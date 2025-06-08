import { RouterProvider,} from "react-router-dom";
import { AuthProvider, } from "./context/AuthContext";
import router from "./router/router"


function App() {
  return (
    <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;