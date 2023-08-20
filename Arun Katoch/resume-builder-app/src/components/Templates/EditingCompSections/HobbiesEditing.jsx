import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { labelCss, inputFields, sectionsContainerCss } from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const HobbiesEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Add / Remove Hobbies:"}
        sectionAccordion={appContext.formState.hobbiesAccordion}
        showDispatchType="SHOW_HOBBIES_ACCORDION"
        hideDispatchType="HIDE_HOBBIES_ACCORDION"
      />
      <div
        className={
          appContext.formState.hobbiesAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={sectionsContainerCss}>
          <label htmlFor="hobbies" className={labelCss}>
            Add Hobbies here:
          </label>
          <input
            type="text"
            name="hobbies"
            id="hobbies"
            className={inputFields}
            value={appContext.formState.inputHobbies}
            onChange={(e) =>
              appContext.dispatch({
                type: "INPUT_HOBBIES",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            (some hobbies are already added if you want to delete these hobbies
            just type the hobby name above (same as shown on resume) and Delete
            it)
          </span>
          <div className="flex items-center justify-end gap-3">
            <button
              className="text-[12px] py-2 px-4 text-white bg-blue-400 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                appContext.dispatch({
                  type: "ADD_HOBBY",
                });
              }}
            >
              Add Hobby
            </button>
            <button
              className="text-[12px] py-2 px-4 text-white bg-red-400 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                appContext.dispatch({
                  type: "DELETE_HOBBY",
                });
              }}
            >
              Delete Hobby
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HobbiesEditing;
