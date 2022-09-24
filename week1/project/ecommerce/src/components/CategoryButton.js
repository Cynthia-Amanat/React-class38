import allProducts from "../fake-data/all-products.js";
import { useState, useEffect } from "react";

const CategoryButton = ({ categories, setProducts }) => {
  const [productName, setProductName] = useState("women's clothing");

  const handleClick = (e) => {
    const categoryValue = e.target.value.replace("FAKE: ", "");
    setProductName(categoryValue);
  };
  useEffect(() => {
    const filteredProducts = allProducts.filter(
      (product) => product.category === productName
    );
    setProducts(filteredProducts);
  }, [productName]);

  return (
    <>
      {categories.map((category, index) => (
        <button
          type="button"
          className="btn btn-secondary btn-lg data-toggle=button"
          key={index}
          value={category}
          onClick={(e) => handleClick(e)}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CategoryButton;
