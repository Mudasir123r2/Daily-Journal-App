// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/entries",
  });
  
export default axiosInstance;
  

