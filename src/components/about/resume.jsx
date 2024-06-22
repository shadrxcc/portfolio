import React from "react";
import resume from "./Résumé.pdf";
import { BsArrowRight } from "react-icons/bs";

const Resume = () => {
  return (
    <>
      <div>
        <a
          className=" flex gap-x-2 items-center"
          target="_blank"
          rel="noreferrer"
          href={resume}
          download
        >
          <p className="text hover:underline text-neutral-400">Get my Résumé</p>
        </a>
      </div>
    </>
  );
};

export default Resume;
