import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
//import Navbar from "./components/navbar";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
