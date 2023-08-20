import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen } from "react-icons/bs";

const AvailableTemplates = ({ details }) => {
  const [templateHover, setTemplateHover] = useState("hidden");

  const tempHoverHandler = () => {
    setTemplateHover("absolute");
  };
  const tempOutHandler = () => {
    setTemplateHover("hidden");
  };
  return (
    <Link to={`${details.tempName}`}>
      <div
        className="w-52 h-72 flex items-center relative transition-transform duration-100 justify-center border hover:cursor-pointer hover:shadow-inner hover:scale-[1.08] "
        onMouseOver={tempHoverHandler}
        onMouseOut={tempOutHandler}
      >
        <img
          src={details.image}
          alt={details.tempName}
          className="w-full h-full"
        />
        <div className={templateHover}>
          <BsArrowsFullscreen className="text-xl text-gray-700" />
        </div>
      </div>
    </Link>
  );
};

export default AvailableTemplates;
