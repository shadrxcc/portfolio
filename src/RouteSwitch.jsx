import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Animatedroutes from "./Animatedroutes";
import ScrollToTop from "./ScrollToTop";

const RouteSwitch = () => {
  return (
    <>
      <div className="flex flex-col gap-[5.5em]">
        <Navbar />
        <ScrollToTop/>
        <Animatedroutes/>
        <Footer />
      </div>
    </>
  );
};

export default RouteSwitch;
