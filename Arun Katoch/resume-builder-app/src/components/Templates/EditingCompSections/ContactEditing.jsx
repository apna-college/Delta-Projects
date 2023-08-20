import React, { useContext } from "react";
import { AppContext } from "../../../App";
import {
  labelCss,
  inputFields,
  inputAndLabelContainerCss,
} from "../FormStyling/editingCompStyles";

const ContactEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <div className={inputAndLabelContainerCss}>
      <label htmlFor="email" className={labelCss}>
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className={inputFields}
        value={appContext.formState.userEmail}
        onChange={(e) =>
          appContext.dispatch({
            type: "EMAIL_CHANGE",
            value: e.target.value,
          })
        }
      />
      <label htmlFor="phone" className={labelCss}>
        Phone:
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        className={inputFields}
        value={appContext.formState.userPhone}
        onChange={(e) =>
          appContext.dispatch({
            type: "USER_PHONE_CHANGE",
            value: e.target.value,
          })
        }
      />
    </div>
  );
};

export default ContactEditing;
