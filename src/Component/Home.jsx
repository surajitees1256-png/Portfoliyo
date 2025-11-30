import React from "react";
import photo from "../assets/suraj_main_photo.png";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center text-center px-4 mt-10">

        {/* Profile Image */}
        <img
          src={photo}
          alt="Suraj Photo"
          className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover shadow-lg"
        />

        {/* Greeting Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
          Hi! I'm Suraj Sharma 👋🏾
        </h1>

        {/* Sub Heading */}
        <div className="mt-6 font-extralight">
          <h1 className="text-3xl sm:text-4xl md:text-6xl">
            Frontend Web Developer
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl mt-2">
            based in India.
          </h1>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">

          <button className="bg-gray-800 text-white rounded-3xl px-6 py-3 border border-black hover:scale-105 transition">
            Connect with me →
          </button>

          <button className="rounded-3xl px-6 py-3 border border-black hover:bg-gray-200 hover:scale-105 transition">
            My resume ↧
          </button>
          
        </div>

      </div>
    </>
  );
}
