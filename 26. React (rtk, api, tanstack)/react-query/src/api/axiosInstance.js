import axios from "axios";
import { BASE_URL, TIMEOUT } from "./constants.js";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
