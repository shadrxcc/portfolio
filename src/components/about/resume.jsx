import React from "react";
import resume from "./Resume(Frontend).pdf";
import { BsArrowRight } from "react-icons/bs";

const Resume = () => {
  return (
    
    <>
      <div>
        <a className=" flex gap-x-2 items-center"  target="_blank" rel="noreferrer" href={`https://docs.google.com/document/d/1ceAZmZYJo2wn3evUjF8ofIJDeCFi4zXfE0zoopJmUcE/edit?usp=sharing`} download>
          <p className="resume md:text-base text-lg text-white opacity-75 hover:opacity-100">
            Get my resume{" "}
          </p>
          <BsArrowRight className="resume text-white" />
        </a>
      </div>
    </>
  );
};

export default Resume;
