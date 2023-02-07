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
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="mt-[5rem] flex flex-col gap-y-[3.5rem]"
      >
        <div className="mx-[24px] md:w-[70%]">
          <div className="">
            <Animatedintro text={"Hello, I'm"} />
            <Animatedname text={"Shadrach Akaade"} />
            <Animatedtitle text={"Frontend Engineer"} />
          </div>
          <div>
            <Animatedsummary
              text={`I create aesthetically pleasing, accessible, and functional web experiences.`}
            />
          </div>
        </div>
        <HighlightedProjects/>
      </motion.div>
    </>
  );
};

export default Home;
