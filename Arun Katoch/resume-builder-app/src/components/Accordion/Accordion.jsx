import React, { useContext } from "react";
import { AppContext } from "../../App";
import upArrow from "../../assets/upArrow.png";
import downArrow from "../../assets/downArrow.png";

const Accordion = ({
  mainHeading,
  sectionAccordion,
  showDispatchType,
  hideDispatchType,
}) => {
  const appContext = useContext(AppContext);
  return (
    <div className="w-[98%] lg:w-[70%] my-2 flex items-center justify-between">
      <span className="text-base lg:text-lg font-semibold">{mainHeading}</span>
      {sectionAccordion === "hide" && (
        <img
          src={downArrow}
          alt="down_arrow"
          className="w-4 lg:w-6 hover:cursor-pointer"
          onClick={() => {
            appContext.dispatch({
              type: showDispatchType,
              payload: "show",
            });
          }}
        />
      )}
      {sectionAccordion === "show" && (
        <img
          src={upArrow}
          alt="down_arrow"
          className="w-4 lg:w-6 hover:cursor-pointer"
          onClick={() => {
            appContext.dispatch({
              type: hideDispatchType,
              payload: "hide",
            });
          }}
        />
      )}
    </div>
  );
};

export default Accordion;
