import { CategoriesApi } from "../static/productCategoryApi";
const Category = () => {
  return (
    <div className="flex justify-between items-center p-5 mobile:flex-col cursor-pointer">
      {CategoriesApi.map((category, index) => (
        <div
          key={index}
          className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative"
        >
          <img
            src={category.src}
            className="w-[100%] h-[400px] cursor-pointer"
            alt="category_img"
          />
          <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
            <h2 className="text-white font-mochiy-pop text-[30px]">
              {category.title}
            </h2>
            <buttton className="btn font-pacifico">See more</buttton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
