import { useState, useEffect } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import "../index.css";

const slides = [
  {
    image: "https://www.mainawatisteel.com/images/banner3.jpg",
    caption: "Telecommunication & Transmission Towers",
    subtitle: "Mainawati has a 3000 MTPA tower manufacturing unit",
  },
  {
    image: "https://www.mainawatisteel.com/images/banner.jpg",
    caption: "Mainawati Steel",
    subtitle: "Since 1995",
  },
  // {
  //   image: "https://www.mainawatisteel.com/images/banner2.jpg",
  //   caption: "Image 3 Caption",
  //   subtitle: "Subtitle 3",
  // },
  {
    image: "https://www.mainawatisteel.com/images/9.jpg",
    caption: "Suspension Bridge",
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
      <img
        src={currentSlide.image}
        alt={`Slide ${currentSlideIndex + 1}`}
        className="md:w-full lg:w-full lg:h-[800px] md:h-full w-full h-[400px]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold text-secondery uppercase ">
            {currentSlide.caption}
          </h2>
          <p className="text-xl text-secondery ">{currentSlide.subtitle}</p>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full md:mt-[4rem] lg:mt-0 mt-[4rem]"
      >
        <BiSkipPrevious className="bg-secondery  text-3xl rounded-full hover:text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full md:mt-[4rem] lg:mt-0 mt-[4rem]"
      >
        <BiSkipNext className="bg-secondery  text-3xl rounded-full hover:text-primary" />
      </button>
    </div>
  );
}

export default Slideshow;
