import axios from "axios";
import { API_URL } from "../constants/env";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  //withCredentials: true,
});

export default axiosPrivate;
