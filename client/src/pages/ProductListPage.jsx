import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const ProductListPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-6 ">
        <p>GO back</p>
        <h1>Product List</h1>
        <p>sort</p>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default ProductListPage;
