
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/Logo.png";
import Menu from "./MenuItems";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="navbar">
      <div className="swap-logo">
      <Link href="/">
        <Image src={Logo} alt="me" width="36" height="49" />
        </Link>
      </div>
      <nav className="menu" >
      <div className="menu-icon " onClick={() => setToggle(!toggle)}></div>
      
        <div className=" mt-4 right-6 md:hidden  scale-150">
          <FaBars onClick={showMenu} className="scale-150 cursor-pointer" />
        </div>
         
        <ul className="hidden md:flex w-100% gap-8 ml-[4rem] w-[100%] ">

          
          <Link href="/About">
            <li className="menu full about">About</li>
          </Link>
   
          <Link href="/contact">
            <li className="menu full about">Contact Us</li>
          </Link>

          <Link href="/FAQ">
            <li className="menu full about">FAQ</li>
          </Link>
          
          <button className="download-btn">Download App</button>
        </ul>
        <Menu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
export default NavBar;