import React, { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Nishan Kadel",
      quote:
        "The ride booking app has completely transformed my daily commute. With just a few taps, I can easily book a ride and have a driver at my doorstep within minutes. The convenience and reliability of the service are unparalleled, making my travel experience stress-free and efficient.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg ",
      name: "Ritika Thapa",
      quote:
        "I travel frequently for business, and the ride booking app has become my trusted companion. Whether I'm in a new city or navigating rush hour traffic, I can always rely on the app to provide a reliable and professional driver. The app's seamless interface and real-time tracking feature give me peace of mind and ensure that I arrive at my meetings on time.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Rakish Raut",
      quote:
        "As a frequent traveler, I have tried various ride booking apps, but none compare to this one. The app's user-friendly design and intuitive navigation make it incredibly easy to request rides, even in unfamiliar locations. Moreover, the consistent quality of the drivers and the excellent customer support have made it my go-to choice for all my transportation needs.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <>
      <section data-aos="fade-up" className="py-5">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className=" text-3xl font-semibold pb-6 ">
              <span className="text-[#2782C2]">Thoughts </span>
              <span>&</span> <sapn className=" ">Review</sapn>
            </h3>
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial === idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-800   text-[1.2rem] ">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          alt={`testimonial`}
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                        />
                        <div className="mt-3">
                          <span className=" underline text-gray-800 font-bold ">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-sky-600 focus:ring ${
                      currentTestimonial === idx
                        ? "bg-indigo-600"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
