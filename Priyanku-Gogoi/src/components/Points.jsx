/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Points = ({ points }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <h1 className="text-lg font-semibold">Score :</h1>
      <div className="h-[40px] w-[40px] text-center flex items-center justify-center font-semibold text-xl rounded bg-white">
        <h1 className="my-auto font-bold text-green-700">{points}</h1>
      </div>
    </div>
  );
};

export default Points;
