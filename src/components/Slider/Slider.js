import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div
        className="w-screen sm:w-[300vw] flex h-screen transition duration-1000	"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={data[0]}
          className="w-screen sm:w-[100vw] h-full object-cover"
        />
        <img
          src={data[1]}
          className="w-screen sm:w-[100vw] h-full object-cover"
        />
        <img
          src={data[2]}
          className="w-screen sm:w-[100vw] h-full object-cover"
        />
      </div>
      <div className="absolute left-0 right-0 m-auto w-1 flex bottom-40">
        <div
          className="w-24 h-15 py-3 px-3 border-2  bg-green-700	 mr-1 cursor-pointer"
          onClick={prevSlide}
        >
          <AiOutlineLeft />
        </div>
        <div
          className="w-24 h-15 py-3 px-3 border-2 cursor-pointer bg-green-700	"
          onClick={nextSlide}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
