import "./App.css";
import ProductsByCategories from "./components/productCategories.js";
import ProductInformation from "./components/ProductInformation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteProduct from "./components/FavoriteProducts";
import { FavoriteProvider } from "./context/FavoriteContext";
import NavLinkFavoriteProducts from "./components/NavLinkFavriteProduts";
function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <Router>
          <NavLinkFavoriteProducts />
          <Routes>
            <Route path="/" element={<ProductsByCategories />} />

            <Route
              path="/products/:productId"
              element={<ProductInformation />}
            />
            <Route path="/favorite" element={<FavoriteProduct />} />
          </Routes>
        </Router>
      </FavoriteProvider>
    </div>
  );
}

export default App;
