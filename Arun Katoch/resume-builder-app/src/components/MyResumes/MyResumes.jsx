import React, { useContext } from "react";
import { AppContext } from "../../App";
import Navbar from "../Navbar";

const MyResumes = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Navbar />
      <div className="w-[100%] h-screen flex items-center justify-center">
        <span className="text-lg">This page is under Construction...</span>
      </div>
    </>
  );
};

export default MyResumes;
