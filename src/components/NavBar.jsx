import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const path = window.location.pathname;
  console.log(path);

  return (
    <nav className="lg:mx-3 md:mx-0 sm:mx-0 ">
      <div className="mx-auto  my-2 md:my-0">
        <div className="flex justify-between items-center  mbl-design">
          <div className="text-xl font-semibold mbl-logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose className="bg-[white] text-[black] font-bold  text-[2rem] p-1 rounded-full   " />
              ) : (
                <FaBars className="bg-primary text-secondery font-bold  text-[2rem] p-1 rounded-full t " />
              )}
            </button>
          </div>
          <div
            className={`md:flex md:items-center ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <ul className="md:flex gap-1 font-semibold text-[#317eb9]">
              <li>
                <a
                  href="/"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/" && "text-[black]"
                  }`}
                >
                  Home
                </a>
              </li>
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="/about"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/about" && "text-[black]"
                  }`}
                >
                  About Us
                </a>
              </li>{" "}
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="/acchivement"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/acchivement" && "text-[black]"
                  }`}
                >
                  Achivement
                </a>
              </li>{" "}
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="/production-process"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/production-process" && "text-[black]"
                  }`}
                >
                  Production Proccess
                </a>
              </li>{" "}
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="capacity"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/capacity" && "text-[black]"
                  }`}
                >
                  Capacity
                </a>
              </li>
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="factory"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/factory" && "text-[black]"
                  }`}
                >
                  Factory
                </a>
              </li>
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="product"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/product" && "text-[black]"
                  }`}
                >
                  Product
                </a>
              </li>
              {/* <span className="mbl-view text-[red]">|</span> */}
              <li>
                <a
                  href="contact-us"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/contact-us" && "text-[black]"
                  }`}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
