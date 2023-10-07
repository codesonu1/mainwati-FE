import { useState } from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
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
              <span>|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  About Us
                </a>
              </li>{" "}
              <span>|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Achivement
                </a>
              </li>{" "}
              <span>|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Production Proccess
                </a>
              </li>{" "}
              <span>|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Capacity
                </a>
              </li>
              <span>|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Factory
                </a>
              </li>
              <span>|</span>
              <li>
                <a
                  href="#"
                  className="hover:text-primary uppercase text-[14px] opacity-90"
                >
                  Our Products
                </a>
              </li>
              <span>|</span>
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
