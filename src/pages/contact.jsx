import React from "react";
import Form from "../components/contact/form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="mx-[24px] md:mx-[150px]">
          <h2 className="text-white text-2xl font-[800] pb-3">
            Contact
          </h2>
          <p className="text-white text-[.95rem] font-normal leading-[1.75] opacity-75 pb-4">
            Want to work with me or say hello?
          </p>
          <Form />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
