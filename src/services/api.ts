import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.1.147:3333",
});

export default api;
