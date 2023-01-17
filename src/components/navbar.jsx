import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { nav } from "./nav";

const Navbar = () => {
  const renderMenu = nav.map((menu, id) => {
    return (
      <Link className="links" to={menu.link} key={id}>
        {menu.name}
      </Link>
    );
  });
  return (
    <div className="nav">
      <div>
     <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div>{renderMenu}</div>
    </div>
  );
};

export default Navbar;
