import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3w8sni",
        "template_p1nv0is",
        form.current,
        "qTzlBj_AUx9bNrCmX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex md:text-[.80rem]  text-[.95rem] font-normal leading-[1.75] flex-col"
      >
        <label htmlFor="name" className="text-white my-1">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="name"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e] text-white opacity-75"
        />
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          id="email"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e] text-white opacity-75"
        />
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <input
          type="text"
          name="message"
          id="message"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e] text-white opacity-75"
        />
        <input
          className="border-2 animate-pulse rounded-[5px] p-2 my-2 text-white opacity-75 border-slate"
          type="submit"
          value="Say hello!"
        />
      </form>
    </div>
  );
};

export default Form;
