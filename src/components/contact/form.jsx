import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
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

    setName("");
    setEmail("");
    setMessage("");
    setOpen(true);
    setClicked(!clicked);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert sx={{ mb: 2 }}>Message sent!</Alert>
        </Collapse>
      </Box>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex text-[.95rem] font-normal leading-[1.75] flex-col"
      >
        <label htmlFor="name" className="text-white my-1">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e] text-white opacity-75"
          required
        />
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e] text-white opacity-75"
          required
        />
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e] text-white opacity-75"
          required
        />
        <input
          id="btn"
          className={`${
            clicked ? "#btn clicked" : "btn"
          }transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 border-2 animate-pulse rounded-[5px] p-2 my-2 text-white opacity-75 border-slate`}
          type="submit"
          value="Say hello!"
        />
      </form>
    </div>
  );
};

export default Form;
