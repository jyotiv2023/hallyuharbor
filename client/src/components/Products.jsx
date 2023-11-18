import Card from "../common/Card";
import { Product_Api } from "../static/productApi";

const Products = () => {
  return (
    <div className="p-5 flex flex-wrap">
      {Product_Api.map((product, index) => (
        <Card item={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
