import React from "react";

const Form = () => {
  return (
    <div>
      <form action="" className="flex md:text-[.80rem]  text-[.95rem] font-normal leading-[1.75] flex-col">
        <label htmlFor="name" className="text-white my-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e]"
        
        />
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e]"
          
        />
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <input
          type="text"
          name="message"
          id="message"
          className="rounded-[5px] p-2 my-2 bg-[#1e1e1e]"
        
        />
        <button className="border-2 rounded-[5px] p-2 my-2 text-white opacity-75 border-slate">
          <p className="animate-pulse">Say hello!</p>
        </button>
      </form>
    </div>
  );
};

export default Form;
