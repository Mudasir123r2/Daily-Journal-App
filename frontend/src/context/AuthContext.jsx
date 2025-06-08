import {useContext,useState,useEffect,createContext} from "react"
import axiosInstance from "../api/axiosInstance"

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{

    const [user,setUser]=useState(null)

    const login = async (formData) => {
  try {
    const res = await axiosInstance.post("/users/login", formData);
    setUser(res.data.user);
    localStorage.setItem("token", res.data.token);
  } catch (err) {
    console.error("Login error:", err);
    throw err; // rethrow to handle in UI
  }
};


    const register = async (formData)=>{
        await axiosInstance.post("/users",formData)
        console.log("register successfully please log in")
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("token")
    }

   useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        axiosInstance.get("/users/me")
            .then((res) => {
                console.log("Fetched user from token:", res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.error("Error verifying token:", err.response?.data || err.message);
                localStorage.removeItem("token");
            });
    }
}, []);


    return (
        <AuthContext.Provider value={{user,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=> useContext(AuthContext)