import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getTMDBMovies } from "../services/api"; // Importar la función para obtener las películas

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener películas populares al cargar el componente
    const fetchMovies = async () => {
      try {
        const response = await getTMDBMovies(); // Llamada a la API de TMDB
        setMovies(response.data.results);
      } catch (err) {
        setError("Error fetching movies. Please try again later.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {error && <p>{error}</p>} {/* Mostrar mensaje de error si lo hay */}
      <MovieList movies={movies} />{" "}
      {/* Pasar las películas al componente MovieList */}
    </div>
  );
};

export default Home;
