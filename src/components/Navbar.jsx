import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/Logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="swap-logo">
        <Image src={Logo} alt="me" width="36" height="49" />
      </div>
      <div className="menu-icon" onClick={() => setToggle(!toggle)}>
        <FaBars />
      </div>
      {toggle && (
        <>
          <div className="menu">
            <Link href="/About">
              <div>About</div>
            </Link>
            <Link href="/contact">
              <div>Contact Us</div>
            </Link>
            <Link href="/FAQ">
              <div>FAQ</div>
            </Link>
          </div>
          <button className="download-btn">Download App</button>
        </>
      )}
    </div>
  );
}
