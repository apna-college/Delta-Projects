import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex px-5 py-1 justify-center gap-2 items-center flex-wrap bg-gray-200 sm:justify-between sm:gap-0 ">
      <div className="">
        <Link
          to="https://katoch-web-solutions.vercel.app/"
          target="_blank"
          className="text-xs sm:text-base hover:cursor-pointer"
        >
          Developed by Katoch Web Solutions
        </Link>
      </div>
      <div>
        <span className="text-xs sm:text-base">
          &copy; All Rights Reserved 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
