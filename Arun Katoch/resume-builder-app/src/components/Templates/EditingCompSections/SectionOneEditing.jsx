import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { labelCss, inputFields, sectionsContainerCss } from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const SectionOneEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Section One (Education Default):"}
        sectionAccordion={appContext.formState.sectionOneAccordion}
        hideDispatchType="HIDE_SECTION_ONE_ACCORDION"
        showDispatchType="SHOW_SECTION_ONE_ACCORDION"
      />
      <div
        className={
          appContext.formState.sectionOneAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={sectionsContainerCss}>
          <label
            htmlFor="resumeHeading_1"
            className="text-lg font-semibold my-4"
          >
            {`Change Heading:`}
          </label>
          <input
            type="text"
            name="resumeHeading_1"
            id="resumeHeading_1"
            className={inputFields}
            value={appContext.formState.resumeHeading1}
            onChange={(e) =>
              appContext.dispatch({
                type: "RESUME_HEADING_1_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className={sectionsContainerCss}>
          <label htmlFor="degree" className={`${labelCss} my-5`}>
            Degree / Diploma (UG/PG/Phd):
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            className={inputFields}
            value={appContext.formState.userEducation[0].degreeType}
            onChange={(e) =>
              appContext.dispatch({
                type: "DEGREE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            use according to your section heading
          </span>
          <label htmlFor="major" className={labelCss}>
            Major Subject / Specilization:
          </label>
          <input
            type="text"
            name="major"
            id="major"
            className={inputFields}
            value={appContext.formState.userEducation[0].major}
            onChange={(e) =>
              appContext.dispatch({
                type: "MAJOR_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="college" className={labelCss}>
            College / University:
          </label>
          <input
            type="text"
            name="college"
            id="college"
            className={inputFields}
            value={appContext.formState.userEducation[0].college}
            onChange={(e) =>
              appContext.dispatch({
                type: "COLLEGE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="degreeStartDate" className={labelCss}>
            Degree Start Date:
          </label>
          <input
            type="text"
            name="degreeStartDate"
            id="degreeStartDate"
            className={inputFields}
            value={appContext.formState.userEducation[0].degreeStartDate}
            onChange={(e) =>
              appContext.dispatch({
                type: "DEGREE_START_DATE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="degreeEndDate" className={labelCss}>
            Degree End Date:
          </label>
          <input
            type="text"
            name="degreeEndDate"
            id="degreeEndDate"
            className={inputFields}
            value={appContext.formState.userEducation[0].degreeEndDate}
            onChange={(e) =>
              appContext.dispatch({
                type: "DEGREE_END_DATE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          {/* ++++++++++++++++++++++++++++++++++++ */}
          <label htmlFor="another_qual_1" className={`${labelCss} my-5`}>
            Degree / Diploma / Standard :
          </label>
          <input
            type="text"
            name="another_qual_1"
            id="another_qual_1"
            className={inputFields}
            value={appContext.formState.userEducation[1].degreeType}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_1_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_1_major" className={labelCss}>
            Major Subject / Specilization (Not necessary):
          </label>
          <input
            type="text"
            name="another_qual_1_major"
            id="another_qual_1_major"
            className={inputFields}
            value={appContext.formState.userEducation[1].major}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_1_MAJOR_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_1_college" className={labelCss}>
            College / University /School:
          </label>
          <input
            type="text"
            name="another_qual_1_college"
            id="another_qual_1_college"
            className={inputFields}
            value={appContext.formState.userEducation[1].college}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_1_COLLEGE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_1_start_date" className={labelCss}>
            Degree Start Date:
          </label>
          <input
            type="text"
            name="another_qual_1_start_date"
            id="another_qual_1_start_date"
            className={inputFields}
            value={appContext.formState.userEducation[1].degreeStartDate}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_1_START_DATE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_1_end_date" className={labelCss}>
            Degree End Date:
          </label>
          <input
            type="text"
            name="another_qual_1_end_date"
            id="another_qual_1_end_date"
            className={inputFields}
            value={appContext.formState.userEducation[1].degreeEndDate}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_1_END_DATE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          {/* ++++++++++++++++++++++++++++++++++++ */}
          <label htmlFor="another_qual_2" className={`${labelCss} my-5`}>
            Degree / Diploma / Matric:
          </label>
          <input
            type="text"
            name="another_qual_2"
            id="another_qual_2"
            className={inputFields}
            value={appContext.formState.userEducation[2].degreeType}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_2_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_2_major" className={labelCss}>
            Major Subject / Specilization (Not necessary):
          </label>
          <input
            type="text"
            name="another_qual_2_major"
            id="another_qual_2_major"
            className={inputFields}
            value={appContext.formState.userEducation[2].major}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_2_MAJOR_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_2_college" className={labelCss}>
            College / University /School:
          </label>
          <input
            type="text"
            name="another_qual_2_college"
            id="another_qual_2_college"
            className={inputFields}
            value={appContext.formState.userEducation[2].college}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_2_COLLEGE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_2_start_date" className={labelCss}>
            Degree Start Date:
          </label>
          <input
            type="text"
            name="another_qual_2_start_date"
            id="another_qual_2_start_date"
            className={inputFields}
            value={appContext.formState.userEducation[2].degreeStartDate}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_2_START_DATE_CHANGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            Use according to your section heading
          </span>
          <label htmlFor="another_qual_2_end_date" className={labelCss}>
            Degree End Date:
          </label>
          <input
            type="text"
            name="another_qual_2_end_date"
            id="another_qual_2_end_date"
            className={inputFields}
            value={appContext.formState.userEducation[2].degreeEndDate}
            onChange={(e) =>
              appContext.dispatch({
                type: "ANOTHER_QUAL_2_END_DATE_CHANGE",
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

export default SectionOneEditing;
