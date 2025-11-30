import React from "react";
import photo from "../assets/suraj_main_photo.png";

export default function About() {
  return (
    <>
      <h1 className="text-center text-4xl font-medium mt-10">About Me</h1>

      {/* Main Container */}
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-10 px-5">

        {/* Image */}
        <div className="w-full max-w-sm lg:max-w-md">
          <img
            src={photo}
            alt="Suraj"
            className="rounded-3xl w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full max-w-3xl">

          <div className="p-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quis aliquid quos cupiditate nostrum quaerat error quae recusandae
              exercitationem, veritatis quasi, beatae ipsum sed illo!
            </p>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">

            <div className="border rounded-lg p-5 shadow text-center">
               <img src="https://icon2.cleanpng.com/20180629/rar/kisspng-computer-icons-symbol-theme-source-code-code-bar-5b3605bfa75cc4.1573712915302670716855.jpg" alt="" className="h-10  justify-self-center"/>
              <h1 className="font-bold text-lg mt-2">Languages</h1>
              <p className="text-gray-500 mt-1">HTML, CSS, JavaScript, React</p>
            </div>

            <div className="border rounded-lg p-5 shadow text-center">
              <img src="https://www.nicepng.com/png/detail/402-4023750_fill-educational-background-comments-educational-background-icon-png.png" alt="" className="h-10  justify-self-center"/>
              <h1 className="font-bold text-lg mt-2">Education</h1>
              <p className="text-gray-500 mt-1">Master of Computer Application</p>
            </div>

            <div className="border rounded-lg p-5 shadow text-center">
              <img src="https://www.vhv.rs/dpng/d/465-4658825_file-folder-icon-file-folder-icon-png-transparent.png" alt="" className="h-10  justify-self-center"/>
              <h1 className="font-bold text-lg mt-2">Projects</h1>
              <p className="text-gray-500 mt-1">More than 5 Projects</p>
            </div>
          </div>

          {/* Tools Section */}
          <h1 className="text-gray-500 px-5 mt-5 text-xl font-medium">
            Tools I Use
          </h1>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 p-5">

            <div className="border rounded-2xl h-16 flex items-center justify-center shadow">
              <img src="https://brandlogovector.com/wp-content/uploads/2021/10/Visual-Studio-Code-Logo-Small.png" alt="" className="h-10  justify-self-center"/>
            </div>

            <div className="border rounded-2xl h-16 flex items-center justify-center shadow">
              <img src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png" alt="" className="h-10  justify-self-center"/>
            </div>

            <div className="border rounded-2xl h-16 flex items-center justify-center shadow">
              
              <img src="https://s3-alpha.figma.com/hub/file/2167104317601928565/6fe8c744-e5e1-40f1-a462-9d1793090d6e-cover.png" alt="" className="h-10  justify-self-center"/>
            </div>

            <div className="border rounded-2xl h-16 flex items-center justify-center shadow">
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsdhco9U8kjUqDFsFCKflB6HPlIsOP87bpg&s" alt="" className="h-10  justify-self-center"/>
            </div>

            <div className="border rounded-2xl h-16 flex items-center justify-center shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdsaOH3LxJisOtkMCdTpqEn-HJmauzZl68A&s" alt="" className="h-10  justify-self-center"/>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
