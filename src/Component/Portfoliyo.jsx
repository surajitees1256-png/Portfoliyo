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
            <img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fieork0qcwe5oaw4ao31h.jpg" alt="" className='h-52 w-full ' />
            <input type="button" className='' />Frentend Project
             <br />web design
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <img src="https://play-lh.googleusercontent.com/Av_6zvlTGrlnj6CkL9DPIYRWp_XyHUAw42CFBduGJXfoH_PPwkrmIdpDMYxnaP79bxM" alt="" className='h-52 w-full '  />
            <input type="button" className='' />Geo Base App
             <br />mobile app
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2024/11/101_UX_vs_UI_illustration_blog-1.png" alt="" className='h-52 w-full '  />
             <input type="button" className='' />UI/UX Designing
             <br />ui/ux design
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-6 shadow-md w-full max-w-xs text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNbo__kldcQNntD2AdktTqF4L-BNY_9Y_aQ&s" alt="" className='h-52 w-full '  />
             <input type="button" className='' />Photography Site
             <br />web design         
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
