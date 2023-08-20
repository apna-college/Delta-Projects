import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { labelCss, inputFields, sectionsContainerCss } from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const SkillsEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Add / Remove Skills:"}
        sectionAccordion={appContext.formState.skillsAccordion}
        showDispatchType="SHOW_SKILLS_ACCORDION"
        hideDispatchType="HIDE_SKILLS_ACCORDION"
      />
      <div
        className={
          appContext.formState.skillsAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={sectionsContainerCss}>
          <label htmlFor="skills" className={labelCss}>
            Type skill name to add / delete:
          </label>
          <input
            type="text"
            name="skills"
            id="skills"
            className={inputFields}
            value={appContext.formState.inputSkills}
            onChange={(e) =>
              appContext.dispatch({
                type: "INPUT_SKILLS",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            (some skills are already added if you want to delete these skills
            just type the skill name above (same as shown on resume) and Delete
            it)
          </span>
          <div className="flex items-center justify-end gap-3">
            <button
              className="text-[12px] py-2 px-4 text-white bg-blue-400 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                appContext.dispatch({
                  type: "ADD_SKILLS",
                });
              }}
            >
              Add Skill
            </button>
            <button
              className="text-[12px] py-2 px-4 text-white bg-red-400 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                appContext.dispatch({
                  type: "DELETE_SKILLS",
                });
              }}
            >
              Delete Skill
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsEditing;
