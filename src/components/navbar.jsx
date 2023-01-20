import { React, Component } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  buttonClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="">
        <header className="transition-all py-0 px-[1.5rem] md:px-[3rem] flex justify-between items-center ease-in duration-300 w-full fixed h-20">
          <div>
            <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>
          <nav>
            <ul
              id="navbar"
              className={`${
                this.state.clicked ? "#navbar active" : "#navbar"
              } bg-[#171717] text-white flex flex-col mt-[15em] gap-[2em] md:mt-0 items-center md:bg-inherit bg-[rgba(23, 23, 23)] w-[100%] right-[0px] h-[100vh] fixed md:relative md:top-0 top-[-100em] md:flex-row`}
            >
             <Link to='/projects'><li className="active">
                Projects
              </li></Link>
               <Link to='/about'><li className="active">
                About
              </li></Link>
               <Link to='/contact'><li className="active">
                Contact
              </li></Link>
            </ul>
          </nav>
          <div
            className="mobile transition-all  ease-in duration-300 md:hidden"
            onClick={this.buttonClick}
          >
            {this.state.clicked ? (
              <GrClose className="text-[35px] text-white" />
            ) : (
              <img src={menu} alt="menu" />
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
