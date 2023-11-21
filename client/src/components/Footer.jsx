import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Footer = () => {
  const iconStyle = `
    h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 
    text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer
    hover:translate-y-[-5px] shadow-lg`;
  //   const socialStyle = `m-3 rounded-full cursor-pointer p-2 text-white  ${
  //     hovered ? "hover:translate-y-[-5px] shadow-lg" : ""
  //   }
  //   `;
  return (
    <div className="flex items-center justify-around p-10 bg-black mobile:flex-col mobile:items-start bg-grey">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px] text-[#f274a8]  font-mochiy-pop">
          Hallyu <span className="text-orange-300 ">Harbor</span>
        </h1>
        <p></p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={iconStyle + ` bg-blue-700 `}>
            <FacebookIcon />
          </div>
          <div className={iconStyle + ` bg-orange-500`}>
            <InstagramIcon />
          </div>
          <div className={iconStyle + ` bg-sky-400`}>
            <TwitterIcon />
          </div>
          <div className={iconStyle + ` bg-red-600`}>
            <PinterestIcon />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnIcon className="text-[#8a4af3]" />
          <p className="pl-3 font-mochiy-pop text-[#fff] ">
            Seoul, South Korea
          </p>
        </div>
        <div className="flex m-3">
          <PhoneIphoneIcon className="text-[#521da8]" />
          <p className="pl-3 font-mochiy-pop text-[#fff]">+91 8238274223</p>
        </div>
        <div className="flex m-3">
          <MailOutlineIcon className="text-[#8a4af3]" />
          <p className="pl-3 font-mochiy-pop text-[#fff]">
            info@hallyuharbor.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
