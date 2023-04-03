import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/Logo.png";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="swap-logo">
        <Image src={Logo} alt="me" width="36" height="49" />
      </div>
      <div className="menu">
        <Link href="/About">
          <div>About</div>
        </Link>
        <Link href="/Contact">
          <div>Contact Us</div>
        </Link>
        <Link href="/FAQ">
          <div>FAQ</div>
        </Link>
      </div>
      <button className="download-btn">Download App</button>
    </div>
  );
}
