import React from "react";

export default function Service() {
  return (
    <>
      <div className="text-center my-10 px-4">
        <h4 className="text-gray-500">What I Offer</h4>
        <h1 className="text-3xl font-bold mt-2">My Services</h1>

        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-8 
          p-6 
          sm:p-10 
          lg:p-16 
          justify-items-center
        "
        >
          {/* Card 1 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <img
              src="https://miro.medium.com/1*bMdzfjPsvXIh3sR0DEnDpQ.jpeg"
              alt="code"
              className="w-25 h-16 mx-auto"
            />
            <h2 className="font-bold text-xl mt-2">Web design</h2>
            <p className="text-gray-500 mt-1">
              Creative, Responsive, Modern, Clean, Functional
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <img
              src="https://play-lh.googleusercontent.com/y_-anVKl3ID25Je02J1dseqlAm41N8pwI-Gad7aDxPIPss3d7hUYF8c08SNCtwSPW5g"
              alt="code"
              className="w-25 h-16 mx-auto"
            />
            <h2 className="font-bold text-xl mt-2">Android</h2>
            <p className="text-gray-500 mt-1">Open-source, Mobile, Flexible, Powerful, Customizable</p>
          </div>
          {/* Card 3 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
             <img
              src="https://www.aufaitux.com/wp-content/uploads/2022/06/mobile-app-ux-ui-basics.jpg"
              alt="code"
              className="w-25 h-16 mx-auto"
            />
            <h2 className="font-bold text-xl mt-2">UI/UX</h2>
            <p className="text-gray-500 mt-1">Intuitive, Simple, Engaging, Accessible, User-focused</p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4503/4503941.png"
              alt="code"
              className="w-25 h-16 mx-auto"
            />
            <h2 className="font-bold text-xl mt-2">Graphic Design</h2>
            <p className="text-gray-500 mt-1">Creative, Visual, Artistic, Communicative, Impactful</p>
          </div>
        </div>
      </div>
    </>
  );
}
