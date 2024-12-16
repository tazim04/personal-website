import { useState } from "react";
import "./NavBar.css";

import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

type NavBarProps = {
  handleNavClick: (
    section: "home" | "about" | "experience" | "projects"
  ) => void;
};

const NavBar: React.FC<NavBarProps> = ({ handleNavClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="text-white bg-[#0f172a] z-10 sticky top-0 w-full px-8 py-2 md:px-16 md:py-5 font-robotoMono">
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
              <button
                onClick={() => handleNavClick("about")}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out hover:bg-gray-700"
              >
                <span className="text-rose-600 glow-text">00. </span>About
              </button>
              <button
                onClick={() => handleNavClick("experience")}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out hover:bg-gray-700"
              >
                <span className="text-rose-600 glow-text">01. </span>Experience
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out hover:bg-gray-700"
              >
                <span className="text-rose-600 glow-text">02. </span>Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden fixed right-2 top-4 z-50">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen bg-[#182442] flex flex-col items-end z-40"
          >
            <div className="px-4 pt-20 pb-3 space-y-4 flex flex-col items-end text-base font-medium text-gray-300">
              <button
                onClick={() => {
                  handleNavClick("about");
                  setIsOpen(false);
                }}
                className="px-3 py-2 rounded-md transition-all ease-in-out hover:bg-gray-600"
              >
                <span className="text-rose-600 glow-text">00. </span>About
              </button>
              <button
                onClick={() => {
                  handleNavClick("experience");
                  setIsOpen(false);
                }}
                className="px-3 py-2 rounded-md transition-all ease-in-out hover:bg-gray-600"
              >
                <span className="text-rose-600 glow-text">01. </span>Experience
              </button>
              <button
                onClick={() => {
                  handleNavClick("projects");
                  setIsOpen(false);
                }}
                className="px-3 py-2 rounded-md transition-all ease-in-out hover:bg-gray-600"
              >
                <span className="text-rose-600 glow-text">02. </span>Projects
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
