/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

const Card = ({ item }) => {
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
  return (
    <div
      className={cardStyle}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img
        src={item.src}
        alt="product"
        className="w-full h-[300px] object-cover"
      />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle}>
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
