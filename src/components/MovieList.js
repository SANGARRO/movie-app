import React, { useEffect, useState } from "react";
import { getTMDBMovies } from "../services/api"; // Importa la función adecuada desde api.js
import MovieCard from "./MovieCard";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTMDBMovies(); // Usa la función importada
        setMovies(response.data.results);
      } catch (err) {
        setError("Error fetching movies. Please try again later.");
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      {error && <p>{error}</p>} {/* Mostrar mensaje de error si lo hay */}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
