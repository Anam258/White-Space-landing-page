import React from "react";

const Hero = () => {
  return (
    <div className="bg-white py-16 lg:py-20 px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
        {/* Left Column */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Project Management
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Right Column */}
        <div className="relative lg:w-1/2">
          <div className="w-full h-[250px] lg:h-[350px] bg-blue-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
