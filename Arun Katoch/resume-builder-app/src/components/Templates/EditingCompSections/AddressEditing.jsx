import React, { useContext } from "react";
import { AppContext } from "../../../App";
import {
  labelCss,
  inputFields,
  inputAndLabelContainerCss,
} from "../FormStyling/editingCompStyles";
import Accordion from "../../Accordion/Accordion";

const AddressEditing = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <Accordion
        mainHeading={"Address Details"}
        sectionAccordion={appContext.formState.addressAccordion}
        showDispatchType="SHOW_ADDRESS_ACCORDION"
        hideDispatchType="HIDE_ADDRESS_ACCORDION"
      />
      <div
        className={
          appContext.formState.addressAccordion === "hide"
            ? "hidden"
            : "w-full flex flex-col gap-4"
        }
      >
        <div className={inputAndLabelContainerCss}>
          <label htmlFor="place" className={labelCss}>
            Address:
          </label>
          <input
            type="text"
            name="place"
            id="place"
            className={inputFields}
            value={appContext.formState.userPlaceName}
            onChange={(e) =>
              appContext.dispatch({
                type: "PLACE_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className={inputAndLabelContainerCss}>
          <label htmlFor="district" className={labelCss}>
            District:
          </label>
          <input
            type="text"
            name="district"
            id="district"
            className={inputFields}
            value={appContext.formState.userDistrict}
            onChange={(e) =>
              appContext.dispatch({
                type: "DISTRICT_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="state" className={labelCss}>
            State:
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className={inputFields}
            value={appContext.formState.userState}
            onChange={(e) =>
              appContext.dispatch({
                type: "STATE_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className={inputAndLabelContainerCss}>
          <label htmlFor="country" className={labelCss}>
            Country:
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className={inputFields}
            value={appContext.formState.userCountry}
            onChange={(e) =>
              appContext.dispatch({
                type: "COUNTRY_CHANGE",
                value: e.target.value,
              })
            }
          />
          <label htmlFor="pin" className={labelCss}>
            Pin:
          </label>
          <input
            type="text"
            name="pin"
            id="pin"
            className={inputFields}
            value={appContext.formState.userPincode}
            onChange={(e) =>
              appContext.dispatch({
                type: "PINCODE_CHANGE",
                value: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default AddressEditing;
