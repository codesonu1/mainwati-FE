import { useState, useEffect } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import slide1 from "../assets/slide1.png";
import img1 from "../assets/1.png";
import img2 from "../assets/img2.png";
import video from "../assets/video.mp4";

import "../index.css";
import VideoPlayer from "./VideoTag";

const slides = [
  // {
  //   image: "https://www.mainawatisteel.com/images/banner2.jpg",
  //   caption: "Image 3 Caption",
  //   subtitle: "Subtitle 3",
  // },
  {
    image: { video },
    caption: "Suspension Bridge",
    type: "video",
  },

  // Add more slides here
];

function Slideshow() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatically transition to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="relative">
      <video
        className="w-full h-full "
        controls
        loop
        autoPlay
        muted
        src={video}
        type="video/mp4"
      ></video>

      {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold text-secondery uppercase ">
            {currentSlide.caption}
          </h2>
          <p className="text-xl text-secondery ">{currentSlide.subtitle}</p>
        </div>
      </div> */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full md:mt-[4rem] lg:mt-0 mt-[0rem] "
      >
        <BiSkipPrevious className="bg-secondery  text-3xl rounded-full hover:text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full md:mt-[4rem] lg:mt-0 mt-[0rem]"
      >
        <BiSkipNext className="bg-secondery  text-3xl rounded-full hover:text-primary" />
      </button> */}
    </div>
  );
}

export default Slideshow;
