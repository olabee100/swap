import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/Logo.png";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="swap-logo">
      <Link href="/">
        <Image src={Logo} alt="me" width="36" height="49" />
        </Link>
      </div>
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
    </div>
  );
}
