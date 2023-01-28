import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Animatedroutes from "./Animatedroutes";

const RouteSwitch = () => {
  return (
    <>
      <div className="flex flex-col gap-[5.5em]">
        <Navbar />
        <Animatedroutes/>
        <Footer />
      </div>
    </>
  );
};

export default RouteSwitch;
