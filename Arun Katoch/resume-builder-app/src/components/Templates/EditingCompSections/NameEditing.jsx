import React, { useContext } from "react";
import { AppContext } from "../../../App";
import {
  labelCss,
  inputFields,
  sectionsContainerCss,
} from "../FormStyling/editingCompStyles";

const NameEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <div className={sectionsContainerCss}>
        <label htmlFor="name" className={labelCss}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={inputFields}
          value={appContext.formState.userName}
          onChange={(e) =>
            appContext.dispatch({
              type: "NAME_CHANGE",
              value: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default NameEditing;
