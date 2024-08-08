import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/api";
import MovieDetails from "../components/MovieDetails";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>{movie ? <MovieDetails movie={movie} /> : <p>Loading...</p>}</div>
  );
};

export default Movie;
