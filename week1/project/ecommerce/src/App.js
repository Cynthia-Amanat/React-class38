import React, { useState } from "react";
import ProductCategories from "./components/ProductCategories.js";
import ShowProducts from "./components/products.js";
import "./App.css";

function App() {
  const [category, setCategory] = useState("FAKE: men's clothing");

  return (
    <div className="App">
      <div className="header">
        <h1> Product by Category </h1>
        {ProductCategories(setCategory)}
      </div>
      <div className="products">{ShowProducts(category)}</div>
    </div>
  );
}

export default App;
