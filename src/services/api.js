import axios from "axios";

// Obtener el token del almacenamiento local o del estado global
const token = localStorage.getItem("token"); // Asegúrate de que el token esté almacenado

const API_KEY = "TU_API_KEY_DE_TMDB";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Configuración para solicitudes autenticadas
api.interceptors.request.use(
  (config) => {
    // Agregar el token Bearer si está presente
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
