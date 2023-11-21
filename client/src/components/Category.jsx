import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await axios.get(
          "http://localhost:3000/api/categories"
        );
        console.log("1", categoryData);
        setCategory(categoryData.data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const fetchCategoryProducts = async (category, subCategory) => {
    try {
      const productData = await axios.get(
        `http://localhost:3000/api/products/${category}/${subCategory}`
      );
      console.log(productData.data);
    } catch (error) {
      console.error("Error fetching category products:", error.message);
    }
  };

  const handleNavigatePage = (item) => {
    const { category, subCategory } = item;

    if (subCategory) {
      // If subcategory is available, navigate to category/subcategory
      navigate(`/products/${category}/${subCategory}`);
      fetchCategoryProducts(category, subCategory);
    } else {
      // If no subcategory, navigate to category
      navigate(`/products/${category}`);
    }
  };

  return (
    <div className="flex justify-between items-center p-5 mobile:flex-col cursor-pointer">
      {category &&
        category.map((item, index) => (
          <div
            key={index}
            className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative"
          >
            <img
              src={item.src}
              className="w-[100%] h-[400px] cursor-pointer"
              alt="category_img"
            />
            <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
              <h2 className="text-white font-mochiy-pop text-[30px]">
                {item.title}
              </h2>
              <button
                className="btn font-pacifico"
                onClick={() => handleNavigatePage(item)}
              >
                See more
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Category;
