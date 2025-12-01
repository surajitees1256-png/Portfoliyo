import React from "react";

export default function Footer() {
  return (
    <>
      {/* Top Section */}
      <div className="text-center mt-[150px] px-4">
        <h1 className="font-bold text-3xl">
          Suraj <span className="text-red-600">.</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mt-1">
          suraj.itees.1256@gmail.com
        </p>
      </div>

      <hr className="my-6 w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 pb-6">

        {/* Left Text */}
        <div className="text-center sm:text-left text-sm text-gray-600">
          © 2025 Suraj Sharma. All rights reserved.
        </div>

        {/* Right Links */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700 font-medium">
          <p className="cursor-pointer hover:text-indigo-600">Terms of Service</p>
          <p className="cursor-pointer hover:text-indigo-600">Privacy Policy</p>
          <p className="cursor-pointer hover:text-indigo-600">Connect with me</p>
        </div>

      </div>
    </>
  );
}
