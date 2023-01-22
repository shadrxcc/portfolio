import React from "react";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="mx-[24px]">
        <h1 className="text-4xl medium text-white">Hello, i'm</h1>
        <h1 className="text-4xl medium text-white">Shadrach Akaade</h1>
        <p className="text-lg text-white opacity-[75%]  pb-3">
          Frontend Engineer
        </p>
        <p className="md:text-[.80rem]  text-[.95rem] font-normal leading-[1.75] text-white opacity-[50%]">
          I'm a software developer specialized in different technologies for
          building web applications. I'm a software developer specialized in
          different technologies for building web applications
        </p>
      </div>
      <Projects/>
      <About/>
      <Contact/>
    </motion.div></>
  );
};

export default Home;
