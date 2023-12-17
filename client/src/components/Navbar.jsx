/* eslint-disable react/prop-types */
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();

  const { cartCount } = props;

  const handleCartClick = () => {
    navigate("/cart");
  };

  const style =
    "text-[14px] text-[#f274a8]   cursor-pointer ml-[25px] mobile:ml-[5px]";

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className=" shadow-md relative z-10 ">
      <div className=" pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className=" left flex flex-1  items-center">
          <div
            className="cursor-pointer w-[50px] h-[50px] "
            onClick={handleLogoClick}
          >
            <img className="rounded-full" src={logo} alt="logo" />
          </div>

          {/* Search Input */}
          {/* <div className=" flex border-[2px]  border-orange-300 rounded-md items-center ml-[10px] p-[5px]">
            <input
              type="text"
              className="border-none xs:w-20 sm:w-30 md:w-40 lg:w-50 xl:w-60 font-mochiy-pop text-[#f274a8] bg-inherit outline-none"
              placeholder="Search"
            />
            <SearchIcon className="text-[#f274a8] m " />
          </div> */}
        </div>
        {/* Logo */}
        <div className="center flex-1 text-center  mobile:ml-6">
          <div className="font-mochiy-pop text-orange-300 mobile:text-sm ">
            Welcome to <span className="text-[#f274a8]">Hallyu</span> Harbor
          </div>
        </div>

        {/* Right Side */}
        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
          <div className="text-[10px] font-mochiy-pop text-[#f274a8]   cursor-pointer ml-[25px] mobile:ml-[5px]">
            Register
          </div>
          <div className="text-[10px] font-mochiy-pop text-orange-300   cursor-pointer ml-[25px] mobile:ml-[5px]">
            Sign In
          </div>
          <div className={style}>
            <Badge
              badgeContent={cartCount}
              color="secondary"
              onClick={handleCartClick}
            >
              <ShoppingCartIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
