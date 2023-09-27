import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { scaleChar } from "./animatedtitle";
import { motion } from "framer-motion";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  buttonClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  closeMenu = () => {
    this.setState(() => ({
      clicked: false,
    }));
  };

  render() {
    return (
      <div className="">
        <header className="transition-all bg-[#171717] z-10 py-0 px-[20px] sm:px-6 flex justify-between items-center ease-in duration-300 w-full mx-auto fixed h-20">
          <div>
            <Link onClick={this.closeMenu} to="/">
              <h2 className="font-[600] text-white text-xl">shadrxcc.</h2>
            </Link>
          </div>
          <nav>
            <ul
              id="navbar"
              className={`${
                this.state.clicked ? "#navbar active" : "#navbar"
              } bg-[#171717] text-white text-lg flex flex-col mt-[15em] gap-[2em] md:mt-0 items-center md:bg-inherit bg-[rgba(23, 23, 23)] w-[100%] right-[0px] h-[100vh] md:h-0 fixed md:relative md:top-0 top-[-100em] md:flex-row`}
            >
              <Link to="/projects">
                <motion.li
                  className="active text-white"
                  whileHover={() => scaleChar()}
                  onClick={this.closeMenu}
                >
                  Projects
                </motion.li>
              </Link>
              <Link to="/about">
                <motion.li
                  className="active text-white"
                  whileHover={() => scaleChar()}
                  onClick={this.closeMenu}
                >
                  About
                </motion.li>
              </Link>
              <Link to="/contact">
                <motion.li
                  className="active text-white"
                  whileHover={() => scaleChar()}
                  onClick={this.closeMenu}
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
          </nav>
          <div
            className="mobile transition-all  ease-in duration-300 md:hidden"
            onClick={() => {
              this.buttonClick();
            }}
          >
            {this.state.clicked ? (
              <VscClose
                className={`${
                  this.state.clicked ? "transition-all rotate-90" : ""
                } text-white text-3xl menu-icon`}
              />
            ) : (
              <CgMenuRight className="text-white transition-all ease-in-out duration-300 text-3xl menu-icon" />
            )}

            {/* <Hamburger color="#fff" size={24} rounded /> */}
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
