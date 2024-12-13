import { useState } from "react";
import "./NavBar.css";

import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white w-full px-8 py-2 md:px-16 md:py-5 font-robotoMono">
      <div className="">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-rose-600 transition-all ease-in-out hover:text-pink-500 bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent glow-text">
            <a className="text-xl font-bold" href="#">
              Tazim Khan
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out hover:bg-gray-700"
            >
              <span className="text-rose-600 glow-text">00. </span>About
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out hover:bg-gray-700"
            >
              <span className="text-rose-600 glow-text">01. </span>Experience
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out hover:bg-gray-700"
            >
              <span className="text-rose-600 glow-text">02. </span>Projects
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Menu as="div" className="md:hidden fixed right-0 text-right">
          <div className="px-2 pt-2 pb-3 w-72 space-y-1 sm:px-3 bg-gray-700">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
            >
              Contact
            </a>
          </div>
        </Menu>
      )}
    </nav>
  );
};

export default NavBar;
