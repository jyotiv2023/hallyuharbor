import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import ApiSlides from "../static/sliderApi";
//import image2 from "../../public/shopping-slides";
const Carousel = () => {
  const [slides] = useState(ApiSlides);
  const [currentSlide, setCurrentSlide] = useState(0); // Change this to 0

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (currentSlide < 0) {
      setCurrentSlide(lastIndex);
    }
    if (currentSlide > lastIndex) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentSlide(currentSlide + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [currentSlide]);
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider h-[600px] w-[100%] flex items-center justify-between mobile:hidden">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === currentSlide) {
          return (
            <section
              className={
                "wrapper flex w-[100%] h-[480px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative"
              }
              key={index}
            >
              <div className={`${slideStyle}+ relative`}>
                {/* <div className="relative"> */}
                <img
                  className="w-[100%] h-[480px] p-[20px] object-cover cursor-pointer"
                  src={slide.src}
                  alt="man"
                />
                {/* <buttton className=" text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3 font-pacifico absolute">
                  See more
                </buttton> */}
                {/* </div> */}
              </div>
            </section>
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
