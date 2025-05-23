import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="text-center mt-30 md:mt-40 flex justify-center items-center">
      <div className=" bg-gray-800 md:py-20 md:px-30 p-8 rounded-2xl">
        <h1 className="text-3xl text-blue-600 mb-5">Welcome</h1>
        <p className="text-gray-400 mb-5">Login by clicking the Sign in button</p>
        <p className="text-gray-700">Username - "admin" & Password - "admin"</p>
      </div>
    </div>
  );
};

export default Hero;
