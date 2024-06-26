import React from "react";
import { motion, spring } from "framer-motion";
import { PropTypes } from "prop-types";

export const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.8 * 1 },
    }),
  };

export const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },

    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: spring,
        damping: 12,
        stiffness: 100,
      },
    },
  };

const Animatedsummary = ({ text }) => {
  return (
    <motion.div
      className="overflow-hidden flex justify-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={child}
        className="md:text-lg text-base text-center font-normal leading-[1.75] text-neutral-400 opacity-[50%]"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Animatedsummary;

Animatedsummary.propTypes = {
  text: PropTypes.string,
}
