import React from 'react';

const MovieCard = ({ movie }) => (
  <div>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
    <p>{movie.vote_average}</p>
  </div>
);

export default MovieCard;
