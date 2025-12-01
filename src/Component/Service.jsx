import React from 'react'

export default function Service() {
  return (
    <>
      <div className="text-center my-10 px-4">

        <h4 className="text-gray-500">What I Offer</h4>
        <h1 className="text-3xl font-bold mt-2">My Services</h1>

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-8 
          p-6 
          sm:p-10 
          lg:p-16 
          justify-items-center
        ">

          {/* Card 1 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <img
              src="https://icon2.cleanpng.com/20180629/rar/kisspng-computer-icons-symbol-theme-source-code-code-bar-5b3605bfa75cc4.1573712915302670716855.jpg"
              alt="code"
              className="w-16 h-16 mx-auto"
            />
            <h2 className="font-bold text-xl mt-2">Languages</h2>
            <p className="text-gray-500 mt-1">HTML, CSS, JavaScript, React</p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Education</h2>
            <p className="text-gray-500 mt-1">Master of Computer Application</p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Projects</h2>
            <p className="text-gray-500 mt-1">More than 5 Projects</p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-5 shadow-md w-full max-w-xs text-center">
            <h1 className="text-3xl">©</h1>
            <h2 className="font-bold text-xl mt-2">Experience</h2>
            <p className="text-gray-500 mt-1">MERN Stack Developer</p>
          </div>

        </div>
      </div>
    </>
  );
}
