import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
//import Navbar from "./components/navbar";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
