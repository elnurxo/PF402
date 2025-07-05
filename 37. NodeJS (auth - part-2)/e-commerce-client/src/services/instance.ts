import axios from "axios";
import { API_BASE_URL } from "./api";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: { "api-key": "code_academy" },
});

export default instance;
