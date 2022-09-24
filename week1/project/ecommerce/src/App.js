import React, { useState } from "react";
import CategoryButton from "./components/CategoryButton.js";
import ShowProducts from "./components/products.js";
import "./App.css";
import categories from "./fake-data/all-categories";

function App() {
  const [products, setProducts] = useState("");

  return (
    <div className="App">
      <div className="header">
        <h1> Product by Category </h1>

        <CategoryButton categories={categories} setProducts={setProducts} />

        <div className="products">
          {products.length > 0 && <ShowProducts products={products} />}
        </div>
      </div>
    </div>
  );
}

export default App;
