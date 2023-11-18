import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="bg-[#f7efef]">
        <Navbar />
        <Carousel />
        <Category />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
