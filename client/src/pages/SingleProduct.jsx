/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Counter from "../components/Counter";

const SingleProduct = (props) => {
  const { selectedProduct, setCartCount, setCartItem } = props;
  const [count, setCount] = useState(0);

  const [product, setProduct] = useState();
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  console.log("3 single product", selectedProduct);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${selectedProduct.category}/${selectedProduct.subCategory}/${selectedProduct.id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [selectedProduct]);

  const addItemToCart = () => {
    setCartCount(count);
    setCartItem(selectedProduct);
  };
  return (
    <>
      <div className="container mx-auto p-5">
        {product ? (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
            <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center w-[50%]">
              <img
                src={product.image}
                className="product_img  lg:w-auto rounded-md h-[600px] "
                alt="product_image"
              />
            </div>
            <div className="lg:flex-1 lg:ml-10">
              <h1 className="title text-4xl lg:text-5xl font-mochiy-pop">
                {product.name}
              </h1>
              <p className="description text-justify mt-4  font-mochiy-pop">
                {product.description}
              </p>
              <div className="flex flex-col mt-7">
                <p className="text-lg font-mochiy-pop">
                  Price{" "}
                  <span className="text-[#f274a8] ml-auto">
                    ${product.price}
                  </span>
                </p>
                <div className="mt-4">
                  <label className="text-lg font-mochiy-pop">Size</label>
                  <select className="border-2 rounded-md ml-3 text-md font-mochiy-pop h-10 w-32 border-[#f3ad4a] cursor-pointer">
                    <option>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <label className="text-lg font-mochiy-pop mr-4">
                    Quantity
                  </label>
                  <Counter
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    count={count}
                  />
                </div>
              </div>
              <button
                onClick={addItemToCart}
                className="text-white font-mochiy-pop bg-[#f3ad4a] border-2 border-[#f3ad4a] rounded-md shadow-md mt-5 p-3 ease-in duration-100"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
