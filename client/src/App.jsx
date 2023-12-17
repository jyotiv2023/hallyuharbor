import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import SingleProductPage from "./pages/SingleProduct";
import { useEffect, useState } from "react";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    // Retrieve the selected product from localStorage on page load
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setSelectedProduct(JSON.parse(storedProduct));
    }
  }, []);

  console.log("4 app", selectedProduct);
  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/products/:category?/:subCategory?"
          element={<ProductListPage setSelectedProduct={setSelectedProduct} />}
        />
        <Route
          path="/products/:category?/:subCategory?/:id"
          element={
            <SingleProductPage
              selectedProduct={selectedProduct}
              setCartCount={setCartCount}
              setCartItem={setCartItem}
            />
          }
        />
        <Route path="/cart" element={<CartPage cartItem={cartItem} />} />
      </Routes>
    </Router>
  );
}

export default App;
