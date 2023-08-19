/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Bubble = ({ number, onClick }) => {
  const handleClick = () => {
    onClick(number);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[50px] h-[50px] cursor-pointer rounded-full flex justify-center items-center bg-green-700"
    >
      <h1 className="font-semibold text-white text-lg">{number}</h1>
    </div>
  );
};

export default Bubble;
