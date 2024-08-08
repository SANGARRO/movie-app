import axios from "axios";

const BACKEND_URL = "http://localhost:5432";
const TMDB_API_KEY = "movies"; 
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

tmdbApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const backendApi = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

backendApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getTMDBMovies = (page = 1) =>
  tmdbApi.get("/discover/movie", {
    params: { page },
  });

export const getTMDBMovieById = (id) => tmdbApi.get(`/movie/${id}`);

export const searchTMDBMovies = (query) =>
  tmdbApi.get("/search/movie", {
    params: { query },
  });

export const getMovies = () => backendApi.get("/movies");
export const getMovieById = (id) => backendApi.get(`/movies/${id}`);
export const login = (credentials) =>
  backendApi.post("/auth/login", credentials);
export const register = (userData) =>
  backendApi.post("/auth/register", userData);
export const getFavorites = () => backendApi.get("/favorites");
export const addFavorite = (movieId) =>
  backendApi.post("/favorites", { movieId });
export const removeFavorite = (movieId) =>
  backendApi.delete(`/favorites/${movieId}`);
export const resetPassword = (email) =>
  backendApi.post("/auth/reset-password", { email });

export { tmdbApi, backendApi };
