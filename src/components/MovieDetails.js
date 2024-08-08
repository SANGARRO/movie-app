import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      {/* Agrega más detalles si es necesario */}
    </div>
  );
};

export default MovieDetails;
