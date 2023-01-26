import React from "react";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import { motion } from "framer-motion";
import Animatedintro from "../components/animatedintro";
import Animatedname from "../components/animatedname";
import Animatedtitle from "../components/animatedtitle";

const Home = () => {
  return (
    <>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="mx-[24px]">
        <Animatedintro text={"Hello, i'm"}/>
        <Animatedname text={"Shadrach Akaade"}/>
        <Animatedtitle text={"Frontend Engineer"}/>
        <p className="md:text-[.80rem] animate-pulse text-[.95rem] font-normal leading-[1.75] text-white opacity-[50%]">
          I'm a software developer specialized in different technologies for
          building web applications. I'm a software developer specialized in
          different technologies for building web applications
        </p>
      </div>
    </motion.div></>
  );
};

export default Home;
