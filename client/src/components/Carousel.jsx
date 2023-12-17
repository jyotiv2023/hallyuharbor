import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Carousel = () => {
  const navigate = useNavigate();

  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(slides);
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const sliderData = await axios.get("http://localhost:3000/api/slides");
        setSlides(sliderData.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };
    fetchSliderData();
  }, []);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (currentSlide < 0) {
      setCurrentSlide(lastIndex);
    }
    if (currentSlide > lastIndex) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setCurrentSlide(currentSlide + 1);
  //   }, 2000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [currentSlide]);

  // Styles

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer m-5";

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  const handleCategoryClick = (slide_category) => {
    // Navigate to the category route
    navigate(`/products/${slide_category}`);
    //fetchSliderData(slide_category);
  };

  return (
    <div className="slider h-[600px] w-[100%] flex items-center justify-between mobile:hidden">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        console.log("slide", slide);
        if (index === currentSlide) {
          return (
            <div
              className={`wrapper flex w-[90%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative `}
              key={index}
            >
              <div className="flex-1 flex justify-center items-center h-[100%]">
                <Link
                  to={`/products/${slide.category}`}
                  onClick={() => handleCategoryClick(slide.category)}
                >
                  <img
                    className="h-full object-cover"
                    src={slide.src}
                    alt="man"
                  />
                </Link>
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Carousel;
