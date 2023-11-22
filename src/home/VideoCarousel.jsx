import { useState, useEffect } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll("[data-carousel-item]");
    const indicators = document.querySelectorAll("[data-carousel-slide-to]");
    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");

    const showSlide = (index) => {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });

      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.setAttribute("aria-current", "true");
        } else {
          indicator.setAttribute("aria-current", "false");
        }
      });
    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) => {
        const newSlide = prevSlide === 0 ? items.length - 1 : prevSlide - 1;
        showSlide(newSlide);
        return newSlide;
      });
    };

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => {
        const newSlide = (prevSlide + 1) % items.length;
        showSlide(newSlide);
        return newSlide;
      });
    };

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    return () => {
      prevButton.removeEventListener("click", prevSlide);
      nextButton.removeEventListener("click", nextSlide);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {/* Item 1 */}
          <div
            className={`duration-700 ease-in-out ${
              currentSlide === 0 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <video controls className="w-full">
              <source
                src="https://www.youtube.com/watch?v=UUzMm7t7Rk0"
                type="video"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Item 2 */}
          <div
            className={`duration-700 ease-in-out ${
              currentSlide === 1 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <video controls className="w-full">
              <source
                src="https://www.youtube.com/watch?v=JUzVhbB9Qq4"
                type="video"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Item 3 */}
          <div
            className={`duration-700 ease-in-out ${
              currentSlide === 2 ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <video controls className="w-full">
              <source
                src="https://www.youtube.com/watch?v=wZNLY5qJkpY"
                type="video"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Slider indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={currentSlide === 0 ? "true" : "false"}
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={currentSlide === 1 ? "true" : "false"}
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={currentSlide === 2 ? "true" : "false"}
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none  "
          data-carousel-prev
        >
          <BiSkipPrevious className="bg-secondery  text-3xl rounded-full hover:text-primary" />
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <BiSkipNext className="bg-secondery  text-3xl rounded-full hover:text-primary" />
        </button>
      </div>

      {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
    </div>
  );
}

export default Carousel;
