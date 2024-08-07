import React from "react";
import MovieList from "../components/MovieList";

const Home = () => (
  <div>
    <h1>Popular Movies</h1>
    <MovieList category="popular" />
  </div>
);

export default Home;
