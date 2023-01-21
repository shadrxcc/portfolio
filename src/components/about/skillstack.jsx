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
      <div
      
        className="card rounded-[5px] flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]"
        key={id}
      >
        <div>
          <p className="text-white text-xl font-medium">{skill.title}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-200 opacity-50">{skill.body}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="skillcards my-5 grid gap-3 md:grid-cols-2">{skills}</div>
  );
};

export default Skillstack;
