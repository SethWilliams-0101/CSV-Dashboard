import axios from "axios";

const api = axios.create({
  baseURL: "https://csv-dashboard-backend-byht.onrender.com" // your Render backend URL
});

export default api;
