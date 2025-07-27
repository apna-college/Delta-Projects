import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Apps from "./components/Apps";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";

import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components/Summary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route exact path="" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
);