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

  return (
    <nav className="">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mbl-design">
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
                <AiOutlineClose className="bg-[white] text-[black] font-bold  text-[2rem] p-1 rounded-full relative left-[18rem] top-[-4rem] " />
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
            <ul className="md:flex space-x-2">
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Home
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  About Us
                </a>
              </li>{" "}
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Achivement
                </a>
              </li>{" "}
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Production Proccess
                </a>
              </li>{" "}
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Capacity
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Factory
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Our Products
                </a>
              </li>
              <span className="mbl-view">|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
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
