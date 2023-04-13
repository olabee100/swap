
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
        <Image src={Logo} alt="me" width="36" height="49" />
      </div>

      <div className="menu-icon" onClick={() => setToggle(!toggle)}></div>
      <nav>
        <div className="right-6 md:hidden  scale-150">
          <FaBars onClick={showMenu} className="scale-150 cursor-pointer" />
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase">
          <Link href="/About">
            <li>About</li>
          </Link>

          <Link href="/contact">
            <li>Contact Us</li>
          </Link>

          <Link href="/FAQ">
            <li>FAQ</li>
          </Link>
          <button className="download-btn">Download App</button>
        </ul>
        <Menu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
export default NavBar;
