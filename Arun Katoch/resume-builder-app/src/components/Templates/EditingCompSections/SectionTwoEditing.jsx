import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { labelCss, inputFields, sectionsContainerCss } from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const SectionTwoEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Section Two (Technical Skills Default):"}
        sectionAccordion={appContext.formState.sectionTwoAccordion}
        hideDispatchType="HIDE_SECTION_TWO_ACCORDION"
        showDispatchType="SHOW_SECTION_TWO_ACCORDION"
      />
      <div
        className={
          appContext.formState.sectionTwoAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={sectionsContainerCss}>
          <label
            htmlFor="resumeHeading_2"
            className="text-lg font-semibold my-4"
          >
            {`Change Heading:`}
          </label>
          <input
            type="text"
            name="resumeHeading_2"
            id="resumeHeading_2"
            className={inputFields}
            value={appContext.formState.resumeHeading2}
            onChange={(e) =>
              appContext.dispatch({
                type: "RESUME_HEADING_2_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>

        <div className={sectionsContainerCss}>
          <label htmlFor="technical_skill_1" className={labelCss}>
            Add Skill:
          </label>
          <input
            type="text"
            name="technical_skill_1"
            id="technical_skill_1"
            className={inputFields}
            value={appContext.formState.userTechnicalSkills[0].skillName}
            onChange={(e) =>
              appContext.dispatch({
                type: "TECHNICAL_SKILL_1",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="technical_skill_1_details" className={labelCss}>
            Skill Details:
          </label>
          <input
            type="text"
            name="technical_skill_1_details"
            id="technical_skill_1_details"
            className={inputFields}
            value={appContext.formState.userTechnicalSkills[0].skillDetails}
            onChange={(e) =>
              appContext.dispatch({
                type: "TECHNICAL_SKILL_1_DETAILS",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="technical_skill_2" className={labelCss}>
            Add Another Skill:
          </label>
          <input
            type="text"
            name="technical_skill_2"
            id="technical_skill_2"
            className={inputFields}
            value={appContext.formState.userTechnicalSkills[1].skillName}
            onChange={(e) =>
              appContext.dispatch({
                type: "TECHNICAL_SKILL_2",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="technical_skill_2_details" className={labelCss}>
            Skill Details:
          </label>
          <input
            type="text"
            name="technical_skill_2_details"
            id="technical_skill_2_details"
            className={inputFields}
            value={appContext.formState.userTechnicalSkills[1].skillDetails}
            onChange={(e) =>
              appContext.dispatch({
                type: "TECHNICAL_SKILL_2_DETAILS",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="technical_skill_3" className={labelCss}>
            Add Another Skill:
          </label>
          <input
            type="text"
            name="technical_skill_3"
            id="technical_skill_3"
            className={inputFields}
            value={appContext.formState.userTechnicalSkills[2].skillName}
            onChange={(e) =>
              appContext.dispatch({
                type: "TECHNICAL_SKILL_3",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="technical_skill_3_details" className={labelCss}>
            Skill Details:
          </label>
          <input
            type="text"
            name="technical_skill_3_details"
            id="technical_skill_3_details"
            className={inputFields}
            value={appContext.formState.userTechnicalSkills[2].skillDetails}
            onChange={(e) =>
              appContext.dispatch({
                type: "TECHNICAL_SKILL_3_DETAILS",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionTwoEditing;
