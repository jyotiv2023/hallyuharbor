/* eslint-disable react/prop-types */
import Card from "../common/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Products = (props) => {
  const { onProductClick } = props;
  console.log("2 products page onproduct clic", onProductClick);
  //const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const { category = "", subCategory = "", id = "" } = useParams();

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
        if (id) {
          url += `/${id}`;
          // Set selectedProductId when id is available
        }

        const response = await axios.get(url);

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, subCategory, id]);

  return (
    <div className="p-5 flex flex-wrap">
      {products.map((product) => (
        <Card
          item={product}
          key={product.id}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  );
};

export default Products;
