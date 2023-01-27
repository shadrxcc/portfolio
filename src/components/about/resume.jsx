import React from "react";
import resume from "./Resume(Frontend).pdf";
import { BsArrowRight } from "react-icons/bs";

const Resume = () => {
  return (
    <>
      <div>
        <a className=" flex gap-x-2 items-center" href={resume} download>
          <p className="resume md:text-sm text-lg text-white opacity-75 hover:opacity-100">
            Get my resume{" "}
          </p>
          <BsArrowRight className="resume text-white" />
        </a>
      </div>
    </>
  );
};

export default Resume;
