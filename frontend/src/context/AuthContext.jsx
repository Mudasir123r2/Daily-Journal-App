import {useContext,useState,useEffect,createContext} from "react"
import axiosInstance from "../api/axiosInstance"

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{

    const [user,setUser]=useState(null)

    const login = async (formData)=>{
        const res = await axiosInstance.post("/users/login",formData)
        setUser(res.data.user)
        localStorage.setItem("token",res.data.token)
    }

    const register = async (formData)=>{
        const res = await axiosInstance.post("/users",formData)
        setUser(res.data.user)
        localStorage.setItem("token",res.data.token)
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("token")
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            axiosInstance.get("/users/me").then((res)=>{
                setUser(res.data)
            })
        }
    },[])


    return (
        <AuthContext.Provider value={{user,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=> useContext(AuthContext)