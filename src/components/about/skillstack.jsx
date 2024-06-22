import React from "react";

const skillstack = [
  {
    title: "Soft Skills",
    body: "TEAM PLAYER  +  ADAPTABLE  +  COMMUNICATION  +  PATIENT  +  RELIABLE  +  PROBLEM-SOLVING",
  },

  {
    title: "Technical Skills",
    body: "HTML5  +  CSS  +  TAILWIND  +  JAVASCRIPT  + TYPESCRIPT +  REACTJS + NEXTJS + ASTRO  +  REDUX  +  JEST  +  GSAP  +  RUBY  +  WORDPRESS  +  GIT  +  FIGMA  +  SUPABASE  +  FIREBASE  +  RESPONSIVE WEB DESIGN(RWD)  +  CROSS-BROWSER COMPATIBILITY  +  AGILE METHODOLOGIES  +  TEST DRIVEN DEVELOPMENT",
  },
];

const Skillstack = () => {
  const skills = skillstack.map((skill, id) => {
    return (
      <div key={id}>
        <div className="card rounded-[5px] shadow-sm transition ease-in-out duration-300 h-fit md:h-[20em] flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]">
          <div>
            <p className="text-white text-xl font-medium">
              {skill.title}
            </p>
          </div>
          <div>
            <p className="text-sm text-neutral-200 leading-7 opacity-50">
              {skill.body}
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="skillcards my-5 grid gap-6 md:grid-cols-2">{skills}</div>
  );
};

export default Skillstack;
