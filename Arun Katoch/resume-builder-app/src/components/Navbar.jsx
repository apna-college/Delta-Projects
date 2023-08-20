import React, { useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMobMenuDiv, setShowMobMenuDiv] = useState(false);
  return (
    <nav className="flex items-center justify-between p-2 bg-sky-400 relative sm:px-5 sm:py-2">
      {/* ------ Logo ----- */}
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <Link to="/">
          <HiOutlineDocumentText className="text-white text-lg  sm:text-[3rem]" />
        </Link>
        <div className="flex flex-wrap gap-1 sm:flex-col sm:gap-0">
          <span className="text-sm text-white font-extralight sm:text-base">
            Professional
          </span>
          <span className="text-sm text-white font-extralight sm:text-base">
            Resume Builder
          </span>
        </div>
      </div>

      {/* -------++++++ Menu Btn ++++++++ ------- */}

      <FiMenu
        className="text-white text-lg ml-2 cursor-pointer sm:m-0 sm:hidden sm:text-[3rem] "
        onClick={() => {
          showMobMenuDiv ? setShowMobMenuDiv(false) : setShowMobMenuDiv(true);
        }}
      />
      {showMobMenuDiv && (
        <div className="absolute border px-2 py-1 top-full bg-gray-400 right-0 z-10">
          <Link to="/my-resumes" className="text-sm text-white cursor-pointer ">
            My Resumes
          </Link>
        </div>
      )}
      {/*  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+ */}
      <Link
        to="/my-resumes"
        className="hidden text-sm text-white cursor-pointer sm:inline sm:text-base"
      >
        My Resumes
      </Link>
    </nav>
  );
};

export default Navbar;
