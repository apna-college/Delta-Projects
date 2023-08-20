import React from "react";
import DatePicker from "../../DOB_Picker/DatePicker";
import MonthPicker from "../../DOB_Picker/MonthPicker";
import YearPicker from "../../DOB_Picker/YearPicker";
import { labelCss, inputFields, inputAndLabelContainerCss } from "../FormStyling/editingCompStyles";
const DobEditing = () => {
  return (
    <div className={inputAndLabelContainerCss}>
      <label htmlFor="day" className={labelCss} title="Date of Birth">
        DOB:
      </label>
      <DatePicker inputFields={inputFields} />
      <MonthPicker inputFields={inputFields} />
      <YearPicker inputFields={inputFields} />
    </div>
  );
};

export default DobEditing;
