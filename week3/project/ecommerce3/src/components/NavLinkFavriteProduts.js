import React from "react";
import { Link } from "react-router-dom";

const NavLinkFavoriteProducts = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="btn btn-secondary btn-lg">Home</button>
      </Link>
      <Link to="/favorite">
        <button className="btn btn-secondary btn-lg">Favorites</button>
      </Link>
    </div>
  );
};
export default NavLinkFavoriteProducts;
