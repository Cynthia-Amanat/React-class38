import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductsByCategories = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const Url = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : "https://fakestoreapi.com/products";
      try {
        const response = await fetch(Url);
        const data = await response.json();
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [selectedCategory]);
  return isLoading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : (
    <>
      <div>
        <h1> Products </h1>
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => {
              setSelectedCategory(product);
            }}
            className="btn btn-secondary btn-lg"
          >
            {product}
          </button>
        ))}
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsByCategories;
