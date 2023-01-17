import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Projects from "./pages/projects";
//import Navbar from "./components/navbar";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
