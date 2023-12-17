/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";

const ProductListPage = ({ setSelectedProduct }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    console.log("1 productlistpage", product);
    setSelectedProduct(product);
    // navigate(
    //   `/products/${product.category}/${product.subCategory}/${product.id}`
    // );
    // Store the selected product in localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex gap-6 ">
        <p
          className="cursor-pointer mt-5 ml-5 p-[5px] text-white font-mochiy-pop bg-[#f3ad4a] border-2 border-[#f3ad4a] rounded-md shadow-md"
          onClick={navigateBack}
        >
          Go back
        </p>
      </div>
      <Products onProductClick={handleProductClick} />
      <Footer />
    </div>
  );
};

export default ProductListPage;
