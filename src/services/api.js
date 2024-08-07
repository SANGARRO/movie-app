import axios from "axios";

const API_KEY = "TU_API_KEY_DE_TMDB";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default api;
