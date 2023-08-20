import React, { useContext } from "react";
import { AppContext } from "../../../App";
import NameEditing from "./NameEditing";
import TaglineEditing from "./TaglineEditing";
import ContactEditing from "./ContactEditing";
import DobEditing from "./DobEditing";
import Accordion from "../../Accordion/Accordion";

const AddDetailsEditing = () => {
  const appContext = useContext(AppContext);

  return (
    <>
      <Accordion
        mainHeading={"Add Your Details Below:"}
        sectionAccordion={appContext.formState.addDetailsAccordion}
        showDispatchType="SHOW_ADDDETAILS_ACCORDION"
        hideDispatchType="HIDE_ADDDETAILS_ACCORDION"
      />
      <div
        className={
          appContext.formState.addDetailsAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <NameEditing />
        <TaglineEditing />
        <ContactEditing />
        <DobEditing />
      </div>
    </>
  );
};

export default AddDetailsEditing;
