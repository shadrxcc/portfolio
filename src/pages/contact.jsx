import React from "react";
import Form from "../components/contact/form";

const Contact = () => {
  return (
    <>
      <div className="mx-[36px] md:mx-[150px]">
        <div className="text-white text-lg font-semibold">Contact</div>
        <p className="text-white text-sm opacity-75 pb-2">
          Want to work with me or say hello?
        </p>
        <Form />
      </div>
    </>
  );
};

export default Contact;
