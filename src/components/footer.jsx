import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="pb-3">
      <div className="flex items-center justify-center md:text-[12px] text-white opacity-[75%] gap-x-[2em]">
        <a href="https://linkedin.com/shadrachakaade">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/shadrxcc">
          <FaGithub />
        </a>
        <a href="https://twitter.com/coldsh0t">
          <FaTwitter />
        </a>
        <a href="akaadesm@gmail.com">
          <IoMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
