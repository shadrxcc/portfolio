import React from "react";
import Form from "../components/contact/form";

const Contact = () => {
  return (
    <>
      <div className="mx-[36px] md:mx-[150px]">
        <h2 className="text-white text-3xl font-[800] pb-3">Contact</h2>
        <p className="text-white text-lg opacity-75 pb-4">
          Want to work with me or say hello?
        </p>
        <Form />
      </div>
    </>
  );
};

export default Contact;
