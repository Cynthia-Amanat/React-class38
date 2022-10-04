import React, { useState, createContext } from "react";

export const FavoriteContext = createContext();
export const FavoriteProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const addFavoriteProduct = (product) => {
    setFavoriteProducts([...favoriteProducts, product]);
  };
  const removeFavoriteProduct = (id) => {
    setFavoriteProducts(
      favoriteProducts.filter((product) => product.id !== id)
    );
  };

  const values = {
    favoriteProducts,
    addFavoriteProduct,
    removeFavoriteProduct,
  };

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};
