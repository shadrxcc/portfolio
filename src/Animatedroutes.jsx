import React from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { AnimatePresence } from 'framer-motion'

const Animatedroutes = () => {
    const location = useLocation();
  return (
    <>
    <AnimatePresence><Routes location={location} key={location.pathname}>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        </AnimatePresence></>
  )
}

export default Animatedroutes