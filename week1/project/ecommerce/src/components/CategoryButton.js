import allProducts from "../fake-data/all-products.js";
import { useState, useEffect } from "react";

const CategoryButtons = ({ categories, setProducts }) => {
  const [productCategory, setProductCategory] = useState("women's clothing");

  const handleClick = (category) => {
    const categoryValue = category.replace("FAKE: ", "");
    setProductCategory(categoryValue);
  };
  useEffect(() => {
    const filteredProducts = allProducts.filter(
      (product) => product.category === productCategory
    );
    setProducts(filteredProducts);
  }, [productCategory]);

  return (
    <>
      {categories.map((category) => (
        <button
          type="button"
          className="btn btn-secondary btn-lg data-toggle=button"
          key={category}
          value={category}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CategoryButtons;
