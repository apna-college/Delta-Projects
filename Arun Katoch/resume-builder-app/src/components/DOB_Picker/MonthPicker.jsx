import React, { useContext } from "react";
import { AppContext } from "../../App";
const MonthPicker = ({ inputFields }) => {
  const appContext = useContext(AppContext);
  return (
    <select
      name="month"
      id="month"
      value={appContext.formState.userDOB_Month}
      onChange={(e) =>
        appContext.dispatch({
          type: "MONTH_CHANGE",
          value: e.target.value,
        })
      }
      className={inputFields}
    >
      <option value="Month">Month</option>
      <option defaultValue="Jan">January</option>
      <option value="Feb">February</option>
      <option value="Mar">March</option>
      <option value="Apr">April</option>
      <option value="May">May</option>
      <option value="Jun">June</option>
      <option value="Jul">July</option>
      <option value="Aug">August</option>
      <option value="Sep">September</option>
      <option value="Oct">October</option>
      <option value="Nov">November</option>
      <option value="Dec">December</option>
    </select>
  );
};

export default MonthPicker;
