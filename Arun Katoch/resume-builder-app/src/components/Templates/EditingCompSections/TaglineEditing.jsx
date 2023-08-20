import React, { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../../../App";
import taglines from "../BlankTempComp/Taglines";
import {
  labelCss,
  inputFields,
  inputAndLabelContainerCss,
  taglineCss,
  hideCss,
} from "../FormStyling/editingCompStyles";

const TaglineEditing = () => {
  const appContext = useContext(AppContext);
  const [taglineBox, setTaglineBox] = useState(hideCss);
  let taglineDivRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      e.stopPropagation();
      if (!taglineDivRef.current.contains(e.target)) {
        setTaglineBox(hideCss);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <>
      <div className={`${inputAndLabelContainerCss} relative`}>
        <label htmlFor="tagline" className={labelCss}>
          Tagline:
        </label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          className={inputFields}
          value={appContext.formState.tagline}
          onClick={(e) => {
            e.stopPropagation();
            setTaglineBox(taglineCss);
          }}
          onChange={(e) =>
            appContext.dispatch({
              type: "TAGLINE_CHANGE",
              value: e.target.value,
            })
          }
        />
        <div className={taglineBox} ref={taglineDivRef}>
          {taglines.map((currElm, index) => {
            return (
              <input
                type="text"
                value={currElm}
                key={index}
                className="border px-2 cursor-pointer hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  appContext.dispatch({
                    type: "AVILIABLE_TAGLINES",
                    value: e.target.value,
                  });
                }}
                readOnly
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaglineEditing;
