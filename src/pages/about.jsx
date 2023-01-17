import React from "react";
import Methods from "../components/about/methods";
import Softskills from "../components/about/softskills";
import Stacks from "../components/about/stacks";
import Summary from "../components/about/summary";

const About = () => {
  return (
    <div className="text-white">
        <p>About</p>
      <Summary />
      <Softskills />
      <Stacks />
      <Methods/>
    </div>
  );
};

export default About;
