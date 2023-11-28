import { useState, useEffect } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import slide1 from "../assets/slide1.png";
import img1 from "../assets/1.png";
import img2 from "../assets/img2.png";
import video from "../assets/video.mp4";
import video2 from "../assets/video2.mp4";

import "../index.css";
import VideoPlayer from "./VideoTag";
import { Link } from "react-router-dom";

const slides = [
  {
    media: video,
    caption: "Building nation",
    subtitle: "Always a step ahead in",
    type: "video",
  },
  {
    media: video2,
    caption: "Building nation",
    subtitle: "Always a step ahead in",
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

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  const renderMedia = () => {
    // if (currentSlide.type === "video") {
    return (
      <video
        className="w-full h-full"
        controls
        loop
        autoPlay
        muted
        src={currentSlide.media}
        type="video/mp4"
      ></video>
    );
    // } else if (currentSlide.type === "image") {
    //   return <img src={currentSlide.media} alt={currentSlide.caption} />;
    // }
  };

  return (
    <div className="relative">
      {renderMedia()}

      <div className="absolute inset-0 flex flex-col mx-[6rem] text-center  justify-center">
        <div className="text-white text-start">
          <span className="text-4xl font-bold bg-[white] p-4 rounded-md text-primary uppercase">
            {currentSlide.caption}
          </span>
          <br />
          <p className="my-8">
            <span className="text-xl px-4 rounded-md bg-secondery text-[black] py-4">
              {currentSlide.subtitle}
            </span>
          </p>
          <p>
            <Link to={"/contact-us"}>
              <span className="bg-primary text-secondery p-3 rounded-md uppercase font-bold cursor-pointer">
                contact us
              </span>
            </Link>
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full md:mt-[4rem] lg:mt-0 mt-[0rem]"
      >
        <BiSkipPrevious className="bg-secondery text-3xl rounded-full hover:text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full md:mt-[4rem] lg:mt-0 mt-[0rem]"
      >
        <BiSkipNext className="bg-secondery text-3xl rounded-full hover:text-primary" />
      </button>
    </div>
  );
}

export default Slideshow;
