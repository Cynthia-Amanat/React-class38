import { FavoriteContext } from "../context/FavoriteContext";
import React, { useContext } from "react";
import { FaGratipay } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const FavoriteProductsIcon = ({ product }) => {
  const { favoriteProducts, addFavoriteProduct, removeFavoriteProduct } =
    useContext(FavoriteContext);

  const isFavorite = (id) => {
    const boolean = favoriteProducts.some((product) => product.id === id);
    return boolean;
  };
  return (
    <div className="heart">
      {isFavorite(product.id) ? (
        <button
          className="addFav"
          onClick={() => {
            removeFavoriteProduct(product.id);
          }}
        >
          <FaGratipay />
        </button>
      ) : (
        <button
          className="addFav"
          onClick={() => {
            addFavoriteProduct(product);
          }}
        >
          {" "}
          <MdOutlineFavoriteBorder />
        </button>
      )}
    </div>
  );
};
export default FavoriteProductsIcon;
