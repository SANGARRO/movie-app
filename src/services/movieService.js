import React, { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "./MovieCard";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(`/movie/${category}`);
        setMovies(response.data.results);
      } catch (err) {
        setError("Error fetching movies");
        console.error(err);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      {error && <p>{error}</p>}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
