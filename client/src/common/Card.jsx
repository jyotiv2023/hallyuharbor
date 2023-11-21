/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

const Card = ({ item, setProductClicked }) => {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");
  const [hovered, setHovered] = useState(false);
  const iconStyle = `
    h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 
    hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer
    ${hovered ? "hover:translate-y-[-5px] shadow-lg" : ""}
  `;
  const cardStyle = `
    flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] 
    m-2 overflow-hidden rounded-md shadow-lg relative
    ${hovered ? "transform scale-105 shadow-xl" : ""}
  `;

  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
    setHovered(true);
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
    setHovered(false);
  }
  const handleCartClick = (item) => {
    console.log("3", item.id);
    setProductClicked(item);
  };
  return (
    <div
      className={cardStyle}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <div>
        <img
          src={item.image}
          alt="product"
          className="w-full h-[300px] object-cover"
        />
        <div className="flex space-x-20 mr-2 p-2">
          <p>Price: ${item.price}</p>
        </div>
      </div>
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle} onClick={() => handleCartClick(item)}>
          <AddShoppingCartIcon />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
