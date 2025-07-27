import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import  { GeneralContextProvider } from "./GeneralContext";


import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
       </GeneralContextProvider>
      
      <div className="content">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;