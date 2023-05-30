import { useState } from "react";
import Button from "./Button";
import Logo from "../img/icon-nads-lg.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Portofolio", link: "/portofolio" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="shadow-lg  w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img src={Logo} alt="Logo Nads" width="45px" className="mr-2"></img>
          Nadazkia
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:opacity-100  ${
            open ? "top-20 opacity-100" : "top-[-490px] opacity-0"
          }`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-6">
              <NavLink
                to={Link.link}
                className="text-gray-800 hover:text-gray-400
                duration-500 cursor-pointer"
              >
                {Link.name}
              </NavLink>
            </li>
          ))}
          <Button>Submit</Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
