import React from "react";
import Resume from "../components/about/resume";
import Skillstack from "../components/about/skillstack";
import Summary from "../components/about/summary";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        className="mx-5 sm:mx-6 mt-10"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 , ease: "easeInOut"}}
      >
        <h2 className="text-white text-2xl font-[800] pb-3">
          About
        </h2>
        <Summary />
        <Skillstack />
        <div>
        {/* <div className="card rounded-[5px] shadow-sm transition ease-in-out duration-300 h-fit flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]">
          <div>
            <p className="text-white text-xl font-medium">
             Skills, Tools and Technologies
            </p>
          </div>
          <div>
            <p className="text-sm leading-8 text-neutral-200 opacity-50">
            HTML5 + CSS + TAILWIND + JAVASCRIPT + REACTJS + REDUX + JEST + GSAP + RUBY + WORDPRESS + GIT + TDD + FIGMA + SUPABASE + FIREBASE + RESPONSIVE WEB DESIGN(RWD) + CROSS-BROWSER COMPATIBILITY + AGILE METHODOLOGIES
            </p>
          </div>
        </div> */}
      </div>
        <Resume />
      </motion.div>
    </>
  );
};

export default About;
