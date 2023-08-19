/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Hit = ({ target }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <h1 className="text-lg font-semibold">Hit :</h1>
      <div className="h-[40px] w-[40px] text-center flex items-center justify-center font-semibold text-xl rounded bg-white">
        <h1 className="my-auto font-bold text-green-700">{target}</h1>
      </div>
    </div>
  );
};

export default React.memo(Hit);
