import Card from "../common/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleProduct from "../pages/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productClicked, setProductClicked] = useState({});
  const { category, subCategory } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:3000/api/products";

        // Check if there's a category in the URL
        if (category) {
          url += `/${category}`;
        }

        // Check if there's a subcategory in the URL
        if (subCategory) {
          url += `/${subCategory}`;
        }

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, subCategory]);
  console.log("2", productClicked);
  return (
    <div className="p-5 flex flex-wrap">
      {products.map((product) => (
        <Card
          item={product}
          key={product.id}
          setProductClicked={setProductClicked}
        />
      ))}
      <SingleProduct productClicked={productClicked} />
    </div>
  );
};

export default Products;
