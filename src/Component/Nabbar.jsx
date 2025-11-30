import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

  // Your required simple toggle function
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <nav className="w-full bg-white dark:bg-gray-900 dark:text-white shadow-sm px-6 py-4 flex justify-between items-center">

        {/* Left Logo */}
        <h1 className="font-bold text-2xl">
          Suraj <span className="font-extrabold text-3xl text-red-700">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[18px] font-medium border-4 border-indigo-200 border-x-indigo-500 border-double rounded-xl px-5 py-2 dark:border-gray-600">
          <li><Link to="/" className="hover:text-indigo-600 dark:hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-indigo-600 dark:hover:text-yellow-400">About me</Link></li>
          <li className="hover:text-indigo-600 dark:hover:text-yellow-400">Service</li>
          <li className="hover:text-indigo-600 dark:hover:text-yellow-400">My work</li>
          <li><Link to="/testimonials" className="hover:text-indigo-600 dark:hover:text-yellow-400">Testimonials</Link></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Dark Mode Icon */}
          <h4
            className="text-2xl cursor-pointer"
            onClick={toggleDarkMode}
          >
            🌙
          </h4>

          <button className="px-4 py-1 bg-black text-white dark:bg-white dark:text-black rounded-md"><Link to="/testimonials" className="hover:text-indigo-600 dark:hover:text-yellow-400">Connect</Link>
            
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl">
          ☰
        </button>
      </nav>
      
    </>
  );
}
