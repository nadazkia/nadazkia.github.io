import { useState } from "react";
import Button from "./Button";
// import Logo from "../../public/img/icon-nads-lg.png";
import { NavLink } from "react-router-dom";
import { Links } from "../components/IsiNavbar";
// import Burger from "./Burger";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  return (
    <nav className="shadow-lg  w-full sticky top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img
            src="img/icon-nads-lg.png"
            alt="Logo Nads"
            width="45px"
            className="mr-2"
          ></img>
          Nadazkia
        </div>

        <div
          id="burger"
          onClick={() => {
            setOpen(!open);
            setActive(!isActive);
          }}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden flex-wrap justify-center content-center"
        >
          <div className="flex relative cursor-pointer w-8 h-8 mx-auto ml-3 justify-center items-center shadow-sm overflow-hidden rounded-md transition-transform border-2">
            <div id="menu" className={isActive ? "active" : ""}>
              <span className="top-[0.5rem] burger-line"></span>
              <span className="top-[0.8rem] burger-line"></span>
              <span className="top-[1.1rem] burger-line"></span>
            </div>
          </div>
          {/* <Burger className={open ? "" : "active"}></Burger> */}
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:opacity-100  ${
            open ? "top-20 opacity-100" : "top-[-490px] opacity-0"
          }`}
        >
          {Links.map((Link) => (
            <li
              onClick={() => {
                setOpen(!open);
                setActive(!isActive);
              }}
              key={Link.name}
              className=" font-[Poppins] md:ml-8 text-lg md:my-0 my-6"
            >
              <NavLink
                to={Link.link}
                className="text-gray-800 hover:text-gray-400
                duration-500 cursor-pointer"
              >
                {Link.name}
              </NavLink>
            </li>
          ))}
          <NavLink
            onClick={() => {
              setOpen(!open);
              setActive(!isActive);
            }}
            to="/contact"
          >
            <Button>Contact</Button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
// const burger = document.getElementById("burger");
// const menu = document.getElementById("menu");
// burger.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });

export default Navbar;
