import React from "react";
import Form from "../components/contact/form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 ,  ease: "easeInOut"}}
      >
        <div className="mx-[24px] md:mx-[150px]">
          <h2 className="text-white text-2xl font-[800] pb-3">
            Contact
          </h2>
          <p className="text-white text-lg font-normal leading-[1.75] opacity-75 pb-4">
            Want to work with me or say hello?
          </p>
          <Form />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
