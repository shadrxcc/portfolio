import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const RouteSwitch = () => {
  return (
    <>
      <div className="flex flex-col gap-[6em] md:gap-[6.48em]">
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default RouteSwitch;
