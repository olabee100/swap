import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
const MenuItems = ({ showMenu, active }) => {
  return (
    <div className="">
      <ul
        className={
          active
            ? " w-[30%]  h-[100%] flex-col flex items-center absolute  z-10 inset-0 left-[60%]  bg-black/10 backdrop-blur-lg gap-8  p-5 md:hidden"
            : "hidden"
        }
      >
        <li className="scale-150">
          <AiOutlineClose onClick={showMenu} className="h-5 w-5" />
        </li>
        <li>
          <Link href="/About" className="text-xl ">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-xl ">
            Contact us
          </Link>
        </li>
        <li>
          <a href="/FAQ" className="text-xl">
            FAQ
          </a>
        </li>

        <li>
          <button className="download-btn2">Download App</button>
        </li>
      </ul>
    </div>
  );
};
export default MenuItems;