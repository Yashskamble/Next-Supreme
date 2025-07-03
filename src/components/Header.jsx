'use client'
import { useState } from "react";
// import { Link } from "react-router-dom";
// import button from "./atoms/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

//   const linkClasses = ({ isActive }) =>
//     `hover:underline hover:font-bold ${isActive ? "underline font-bold" : "font-medium"
//     }`;

  return (
    <nav className="bg-gradient-to-l from-blue-950 to-blue-200 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-blue-950 font-bold text-xl">
          Project Management
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/" >
            Home
          </a>
          <a href="/project" >
            Projects
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 text-white">
          <a href="/" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/project" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
