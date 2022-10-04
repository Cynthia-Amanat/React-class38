import { useContext } from "react";
import ProductCard from "./ProductCard";
import { FavoriteContext } from "../context/FavoriteContext";

const FavoriteProduct = () => {
  const { favoriteProducts } = useContext(FavoriteContext);
  console.log(favoriteProducts);

  return (
    <div>
      <h1>FavoriteProducts</h1>
      <div className="products">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h1>Please choose favorite product </h1>
        )}
      </div>
    </div>
  );
};
export default FavoriteProduct;
