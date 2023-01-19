import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-white opacity-[75%] gap-x-[2em]">
        <FaLinkedinIn />
        <FaGithub />
        <FaTwitter />
        <IoMail />
      </div>
    </div>
  );
};

export default Footer;
