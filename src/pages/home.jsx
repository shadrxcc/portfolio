import React from "react";
import { motion } from "framer-motion";
import Animatedintro from "../components/animatedintro";
import Animatedname from "../components/animatedname";
import Animatedtitle from "../components/animatedtitle";
import HighlightedProjects from "../components/highlighted";
import Animatedsummary from "../components/animatedsummary";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 , ease: "easeInOut"}}
        className="mt-[5rem] flex flex-col gap-y-7"
      >
        <div className="mx-[24px] md:w-[70%]">
          <div className="">
          <Animatedintro text={"Hello, i'm"} />
          <Animatedname text={"Shadrach Akaade"} />
          <Animatedtitle text={"Frontend Engineer"} /></div>
          <div>
          <Animatedsummary
            text={`I love creating aesthetically pleasing, accessible and functional user-friendly web experiences.`}
          /></div>
        </div>
        <HighlightedProjects />
      </motion.div>
    </>
  );
};

export default Home;
