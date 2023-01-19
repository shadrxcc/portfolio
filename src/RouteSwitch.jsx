import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
