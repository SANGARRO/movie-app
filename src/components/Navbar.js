import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/reset-password">Reset Password</Link>
    </nav>
  );
};

export default Navbar;
