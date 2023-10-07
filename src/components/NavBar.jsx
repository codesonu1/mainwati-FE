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
            <ul className="md:flex gap-1 font-semibold">
              <li>
                <a
                  href="#"
                  className={`hover:text-primary uppercase text-[14px] opacity-90 px-2 ${
                    path === "/" && "text-[orange]"
                  }`}
                >
                  Home
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  About Us
                </a>
              </li>{" "}
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  Achivement
                </a>
              </li>{" "}
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  Production Proccess
                </a>
              </li>{" "}
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  Capacity
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  Factory
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  Our Products
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90 px-2"
                >
                  Contact
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
