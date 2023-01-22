import React from "react";
import Resume from "../components/about/resume";
import Skillstack from "../components/about/skillstack";
import Summary from "../components/about/summary";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div className="mx-[24px]" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <h2 className="text-white text-2xl md:text-lg font-[800] pb-3">About</h2>
        <Summary />
        <Skillstack />
        <Resume />
      </motion.div>
    </>
  );
};

export default About;
