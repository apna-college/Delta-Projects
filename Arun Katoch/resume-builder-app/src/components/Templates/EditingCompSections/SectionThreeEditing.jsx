import React, { useContext } from "react";
import { AppContext } from "../../../App";
import {
  labelCss,
  inputFields,
  sectionsContainerCss,
} from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const SectionThreeEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Section Three (Extra Curricular):"}
        sectionAccordion={appContext.formState.sectionThreeAccordion}
        hideDispatchType="HIDE_SECTION_THREE_ACCORDION"
        showDispatchType="SHOW_SECTION_THREE_ACCORDION"
      />
      <div
        className={
          appContext.formState.sectionThreeAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={sectionsContainerCss}>
          <label
            htmlFor="resumeHeading_3"
            className="text-lg font-semibold my-4"
          >
            {`Change Heading:`}
          </label>
          <input
            type="text"
            name="resumeHeading_3"
            id="resumeHeading_3"
            className={inputFields}
            value={appContext.formState.resumeHeading3}
            onChange={(e) =>
              appContext.dispatch({
                type: "RESUME_HEADING_3_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className={sectionsContainerCss}>
          <label htmlFor="extra_activity_1" className={labelCss}>
            Add Activity:
          </label>
          <input
            type="text"
            name="extra_activity_1"
            id="extra_activity_1"
            className={inputFields}
            value={appContext.formState.userExtraCurricular[0].activityName}
            onChange={(e) =>
              appContext.dispatch({
                type: "EXTRA_ACTIVITY_1",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="extra_activity_1_details" className={labelCss}>
            Activity Details:
          </label>
          <input
            type="text"
            name="extra_activity_1_details"
            id="extra_activity_1_details"
            className={inputFields}
            value={appContext.formState.userExtraCurricular[0].activityDetails}
            onChange={(e) =>
              appContext.dispatch({
                type: "EXTRA_ACTIVITY_1_DETAILS",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="extra_activity_2" className={labelCss}>
            Add Activity:
          </label>
          <input
            type="text"
            name="extra_activity_2"
            id="extra_activity_2"
            className={inputFields}
            value={appContext.formState.userExtraCurricular[1].activityName}
            onChange={(e) =>
              appContext.dispatch({
                type: "EXTRA_ACTIVITY_2",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="extra_activity_2_details" className={labelCss}>
            Activity Details:
          </label>
          <input
            type="text"
            name="extra_activity_2_details"
            id="extra_activity_2_details"
            className={inputFields}
            value={appContext.formState.userExtraCurricular[1].activityDetails}
            onChange={(e) =>
              appContext.dispatch({
                type: "EXTRA_ACTIVITY_2_DETAILS",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="extra_activity_3" className={labelCss}>
            Add Another Activity:
          </label>
          <input
            type="text"
            name="extra_activity_3"
            id="extra_activity_3"
            className={inputFields}
            value={appContext.formState.userExtraCurricular[2].activityName}
            onChange={(e) =>
              appContext.dispatch({
                type: "EXTRA_ACTIVITY_3",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="extra_activity_3_details" className={labelCss}>
            Activity Details:
          </label>
          <input
            type="text"
            name="extra_activity_3_details"
            id="extra_activity_3_details"
            className={inputFields}
            value={appContext.formState.userExtraCurricular[2].activityDetails}
            onChange={(e) =>
              appContext.dispatch({
                type: "EXTRA_ACTIVITY_3_DETAILS",
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

export default SectionThreeEditing;
