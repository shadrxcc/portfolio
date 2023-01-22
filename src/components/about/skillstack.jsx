import React from "react";

const skillstack = [
  {
    title: "Soft Skills",
    body: "TEAM PLAYER + ADAPTABILITY + COMMUNICATION + PATIENCE + PROBLEM-SOLVING + RELIABLE",
  },

  {
    title: "Technical Skills",
    body: "HTML + CSS + TAILWIND + BOOTSTRAP + JAVASCRIPT + REACTJS + REDUX + JEST + GSAP + GIT + GITHUB + TDD",
  },
];

const Skillstack = () => {
  const skills = skillstack.map((skill, id) => {
    return (
      <div data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div
      
        className="card rounded-[5px] md:h-[9em]  shadow-sm hover-scale-0 md:hover:scale-[1.1] transition ease-in-out duration-300 h-[13em] flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]"
        key={id}
      >
        <div>
          <p className="text-white md:text-base text-xl font-medium">{skill.title}</p>
        </div>
        <div>
          <p className="text-sm md:text-[11px] text-neutral-200 opacity-50">{skill.body}</p>
        </div>
      </div></div>
    );
  });
  return (
    <div className="skillcards my-5 grid gap-6 md:grid-cols-2">{skills}</div>
  );
};

export default Skillstack;
