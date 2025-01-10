import { PublicRoutes } from "@/utils";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.pathname = PublicRoutes.login;
      toast.error("Token Expired !!");
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
