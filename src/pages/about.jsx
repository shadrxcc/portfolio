import React from "react";
import Resume from "../components/about/resume";
import Skillstack from "../components/about/skillstack";
import Summary from "../components/about/summary";

const About = () => {
  return (
    <>
      <div className="mx-[24px]">
        <h2 className="text-white text-2xl font-[800] pb-3">About</h2>
        <Summary />
        <Skillstack />
        <Resume />
      </div>
    </>
  );
};

export default About;
