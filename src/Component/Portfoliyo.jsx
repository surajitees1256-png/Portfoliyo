import React from 'react';

export default function Portfoliyo() {
  return (
    <>
      <div className="text-center my-10 px-4">

        <h4 className="text-gray-500">My Portfolio</h4>
        <h1 className="text-3xl font-bold mt-2">My Latest Work</h1>

        <p className="mt-4 text-gray-600">
          Welcome to my web development portfolio! Explore projects showcasing
        </p>
        <p className="text-gray-600">my expertise in front-end development.</p>

        {/* Responsive Grid */}
        <div className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-10 
            p-6 
            mt-10
            md:px-20
            justify-items-center">

          {/* Card 1 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Languages</h2>
            <p className="text-gray-500 mt-1">HTML, CSS, JavaScript, React</p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Education</h2>
            <p className="text-gray-500 mt-1">Master of Computer Application</p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Projects</h2>
            <p className="text-gray-500 mt-1">More than 5 Projects</p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Experience</h2>
            <p className="text-gray-500 mt-1">MERN Stack Developer</p>
          </div>
        </div>

        {/* Center Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
          >
            Send Message →
          </button>
        </div>

      </div>
    </>
  );
}
