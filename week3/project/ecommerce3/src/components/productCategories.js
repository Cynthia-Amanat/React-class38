import { useState } from "react";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

const ProductsByCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoryUrl = `https://fakestoreapi.com/products/categories`;
  const productUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";

  const {
    data: categories,
    isloading: categoryLoading,
    error: categoryError,
  } = useFetch(categoryUrl);

  const {
    data: filteredProducts,
    isloading: productLoading,
    error: productError,
  } = useFetch(productUrl);
  return categoryLoading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : categoryError ? (
    <>
      <h2>{categoryError}</h2>
    </>
  ) : (
    <>
      <div>
        <h1> Products </h1>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setSelectedCategory(category);
            }}
            className="btn btn-secondary btn-lg"
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {productLoading ? (
          <>
            <h2>Loading...</h2>
          </>
        ) : productError ? (
          <>
            <h2>{productError}</h2>
          </>
        ) : (
          <div className="products">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsByCategories;
