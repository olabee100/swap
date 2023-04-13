import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
const MenuItems = ({ showMenu, active }) => {
  return (
    <div className="">
      <ul
        className={
          active
            ? " flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/10 backdrop-blur-lg gap-8  p-8 md:hidden"
            : "hidden"
        }
      >
        <li className="scale-150">
          <AiOutlineClose onClick={showMenu} className="h-16 w-16" />
        </li>
        <li>
          <Link href="/" className="text-2xl">
            About
          </Link>
        </li>
        <li>
          <Link href="/" className="text-2xl">
            Contact us
          </Link>
        </li>
        <li>
          <Link href="/" className="text-2xl">
            FAQ
          </Link>
        </li>

        <li>
          <button className="download-btn">Download App</button>
        </li>
      </ul>
    </div>
  );
};
export default MenuItems;
