import React from "react";
import allProducts from "../fake-data/all-products.js";

const ShowProducts = (category) => {
  const productCategory = category.slice(6);
  const categoryList = [];

  allProducts.forEach(({ title, image, category, description, price }) => {
    if (category === productCategory)
      categoryList.push(
        <div className="card">
          <img src={image} className="card-img-top" alt={title} />
          <h5 className="card-title">{title}</h5>
          <span>Price: ${price}</span>
        </div>
      );
  });
  return categoryList;
};
export default ShowProducts;
