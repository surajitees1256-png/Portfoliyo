import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <nav className="w-full bg-white dark:bg-gray-900 dark:text-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">

        {/* Logo */}
        <h1 className="font-bold text-2xl">
          Suraj <span className="font-extrabold text-3xl text-red-700">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[18px] font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#portfolio">My work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <h4 className="text-2xl cursor-pointer" onClick={toggleDarkMode}>🌙</h4>
          <a href="#contact" className="px-4 py-1 bg-black text-white rounded-md">
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 dark:text-white px-6 shadow transition-all duration-300 
        overflow-hidden mt-[70px] 
        ${open ? "max-h-[350px] py-4" : "max-h-0 py-0"}`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About me</a></li>
          <li><a href="#service" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setOpen(false)}>My work</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>

          <div className="flex items-center gap-4 mt-2">
            <h4 className="text-2xl cursor-pointer" onClick={toggleDarkMode}>🌙</h4>
            <a
              href="#contact"
              className="px-4 py-2 bg-black text-white rounded-md w-32 text-center"
            >
              Connect
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}
