import React, { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "./MovieCard";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api.get(`/movie/${category}`);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
