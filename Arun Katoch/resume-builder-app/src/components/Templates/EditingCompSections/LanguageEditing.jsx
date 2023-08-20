import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { labelCss, inputFields, sectionsContainerCss } from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";
const LanguageEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Add / Remove Languages:"}
        sectionAccordion={appContext.formState.languagesAccordion}
        hideDispatchType="HIDE_LANGUAGES_ACCORDION"
        showDispatchType="SHOW_LANGUAGES_ACCORDION"
      />
      <div
        className={
          appContext.formState.languagesAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={sectionsContainerCss}>
          <label htmlFor="language" className={labelCss}>
            Add Language here:
          </label>
          <input
            type="text"
            name="language"
            id="language"
            className={inputFields}
            value={appContext.formState.inputLanguage}
            onChange={(e) =>
              appContext.dispatch({
                type: "INPUT_LANGUAGE",
                value: e.target.value,
              })
            }
          />
          <span className="text-base text-red-500 pl-4">
            (some languages are already added if you want to delete these
            languages just type the language above (same as shown on resume) and
            Delete it)
          </span>
          <div className="flex items-center justify-end gap-3">
            <button
              className="text-[12px] py-2 px-4 text-white bg-blue-400 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                appContext.dispatch({
                  type: "ADD_LANGUAGE",
                });
              }}
            >
              Add Language
            </button>
            <button
              className="text-[12px] py-2 px-4 text-white bg-red-400 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                appContext.dispatch({
                  type: "DELETE_LANGUAGE",
                });
              }}
            >
              Delete Language
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageEditing;
