import React from "react";
import { Link } from "react-router-dom";
const SecondTemplate = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <span className="text-lg">
        This Resume Template is under construction
      </span>
      <Link
        to="/get-started/blankTemplate"
        className="text-blue-500 hover:text-blue-700"
      >
        Go to available template
      </Link>
    </div>
  );
};

export default SecondTemplate;
