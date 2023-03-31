import React from "react";
import Image from "next/image";
import logo from "../../public/images/Logo.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";
import { AiOutlineApple } from "react-icons/ai";

const Footer = () => {
  const options = ["Lanugage", "English", "Spanish", "French"];
  return (
    <footer>
      <div className="bg-gradient-to-r from-[#05A3A3] to-[#226699] w-full h-[70vh] relative">
        <div className="text-[white] relative top-10 lg:top-20 px-5 w-full mx-auto grid lg:grid-cols-5 grid-cols-2">
          <div className="space-y-2 flex flex-col h-full items-center">
            <Image src={logo} width={25} height={25} alt="" className="flex" />
            <p className="font-bold text-[black]">Swap Space</p>
            <div className="bg-[white] text-[black] mt-5 mb-5 text-sm h-16 w-40 text-center cursor-pointer border rounded flex">
              <div className="flex mt-2 mx-auto">
                <SiGoogleplay className="flex w-10 h-10" />
                <p className="text-sm text-center italic">
                  Download on the<span className=""> Play store</span>
                </p>
              </div>
            </div>
            <div className="bg-[white] text-[black] text-sm h-16 w-40 text-center cursor-pointer border rounded flex">
              <div className="flex mt-2 mx-auto">
                <AiOutlineApple className="flex w-10 h-10" />
                <p className="text-sm text-center italic">
                  Download on the<span className=""> Play store</span>
                </p>
              </div>
            </div>
            <div className="">
              <select className="border border-solid border-white bg-[#05A3A3] text-[black] mt-36 rounded text-sm h-12 w-40">
                {options.map((ele) => {
                  return <option>{ele}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col text-center  space-y-8 mt-4">
            <p className="font-bold text-2xl">Explore</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
          <div className="space-y-2 mt-4 text-center">
            <p className="font-bold text-2xl">Join us</p>
            <p>Advertise with us</p>
          </div>
          <div className="purple text-center  space-y-2 mt-4">
            <h1 className="font-bold text-2xl">Countries</h1>
            <p>Dubia, UAE</p>
            <p>Instabul, Turkey</p>
          </div>
          <div className=" flex justify-center flex-row space-x-6 mt-4">
            <AiFillTwitterCircle className="w-8 h-8 text-[white]" />
            <BsFacebook className="text-[white] w-8 h-8" />
            <BsLinkedin className="text-[white] w-8 h-8" />
          </div>
        </div>
        {/* <p className="text-2xl font-bold italic mb-16 text-center flex justify-center items-center absolute mx-auto -bottom-1 left-0 right-0 ">
        © Copyright2023. All rights reserved, SwapSpace.com
        </p> */}
      </div>
    </footer>
  );
};
export default Footer;
