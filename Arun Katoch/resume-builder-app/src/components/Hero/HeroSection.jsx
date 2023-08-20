import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full h-[40vh] flex items-center justify-center px-5 sm:h-[50vh] lg:h-[60vh] xl:h-[65vh]">
      <div className="w-[50%] h-full flex items-center justify-center">
        <img
          src="resume_hero.svg"
          alt="hero_image"
          className="w-[60%] h-full"
        />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="flex items-center justify-center bg-sky-400 px-3 py-1 rounded-md hover:shadow-xl sm:py-2">
          <Link
            to="/get-started"
            className="text-xs text-white cursor-pointer sm:text-base"
          >
            Get Started For Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
