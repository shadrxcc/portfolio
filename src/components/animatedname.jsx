import React from "react";
import { motion, spring } from "framer-motion";
import { PropTypes } from "prop-types";

const Animatedname = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.8 * 1 },
    }),
  };

  const child = {
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

  return (
    <motion.div
      className="overflow-hidden flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, id) => {
        return (
          <motion.span
            key={id}
            variants={child}
            className="pr-1 text-3xl subpixel-antialiased font-bold text-white"
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default Animatedname;

Animatedname.propTypes = {
  text: PropTypes.string
}
