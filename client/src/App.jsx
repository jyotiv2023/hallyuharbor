import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="products/:category?/:subCategory?"
          element={<ProductListPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
