import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { labelCss, inputFields } from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const SocialLinksEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      {/* <span className="text-lg font-semibold my-4">
        Add Links (LinkedIn,GitHub,Facebook):
      </span> */}
      <Accordion
        mainHeading={"Add Links (LinkedIn,GitHub,Facebook):"}
        sectionAccordion={appContext.formState.linksAccordion}
        showDispatchType="SHOW_LINKS_ACCORDION"
        hideDispatchType="HIDE_LINKS_ACCORDION"
      />
      <div
        className={
          appContext.formState.linksAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className="w-[70%] flex flex-col gap-2">
          <label htmlFor="linkTitle1" className={labelCss}>
            Link Title:
          </label>
          <input
            type="text"
            name="linkTitle1"
            id="linkTitle1"
            className={inputFields}
            value={appContext.formState.userSocialLinks[0].linkTitle}
            onChange={(e) =>
              appContext.dispatch({
                type: "LINK_TITLE_1_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="link1" className={labelCss}>
            Link:
          </label>
          <input
            type="text"
            name="link1"
            id="link1"
            className={inputFields}
            value={appContext.formState.userSocialLinks[0].link}
            onChange={(e) =>
              appContext.dispatch({
                type: "LINK_1_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="linkTitle2" className={labelCss}>
            Link Title:
          </label>
          <input
            type="text"
            name="linkTitle2"
            id="linkTitle2"
            className={inputFields}
            value={appContext.formState.userSocialLinks[1].linkTitle}
            onChange={(e) =>
              appContext.dispatch({
                type: "LINK_TITLE_2_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="link2" className={labelCss}>
            Link:
          </label>
          <input
            type="text"
            name="link2"
            id="link2"
            className={inputFields}
            value={appContext.formState.userSocialLinks[1].link}
            onChange={(e) =>
              appContext.dispatch({
                type: "LINK_2_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="linkTitle3" className={labelCss}>
            Link Title:
          </label>
          <input
            type="text"
            name="linkTitle3"
            id="linkTitle3"
            className={inputFields}
            value={appContext.formState.userSocialLinks[2].linkTitle}
            onChange={(e) =>
              appContext.dispatch({
                type: "LINK_TITLE_3_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="link3" className={labelCss}>
            Link:
          </label>
          <input
            type="text"
            name="link3"
            id="link3"
            className={inputFields}
            value={appContext.formState.userSocialLinks[2].link}
            onChange={(e) =>
              appContext.dispatch({
                type: "LINK_3_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default SocialLinksEditing;
