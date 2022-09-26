import "./App.css";
import ProductsByCategories from "./components/productCategories.js";
import ProductInformation from "./components/ProductInformation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductsByCategories />} />
          <Route path="/products/:productId" element={<ProductInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
