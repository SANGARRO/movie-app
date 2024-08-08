import React, { useEffect, useState } from "react";
import { getFavorites, addFavorite, removeFavorite } from "../services/api";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((favorite) => (
        <MovieCard key={favorite.id} movie={favorite} />
      ))}
    </div>
  );
};

export default Favorites;
