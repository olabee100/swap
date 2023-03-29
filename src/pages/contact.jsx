import React, { useState } from "react";
import Image from "next/image";
import { FeaturedProperties } from "../constants/Featuredproperties";
import { PopularSearch } from "../constants/PopularSearch";
import { PropertyByEmirates } from "../constants/PropertyByEmirates";
import logo from "../../public/images/Logo.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";
import { AiOutlineApple } from "react-icons/ai";

const contact = () => {
  const [profile, setProfle] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleClick = () => {
    console.log(profile);
  };
  const bg = {
    backgroundImage: "url('/images/Rectangle51.png')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const tg = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const options = ["Lanugage", "English", "Spanish", "French"];

  return (
    <div className="h-full ">
      <div
        style={tg}
        className="  bg-[url('/images/Rectangle51.png')] w-full h-screen bg-cover bg-center bg-no-repeat"
      >
        <div className="mx-auto grid gap-4 ">
          <p className="lg:font-bold lg:text-4xl text-2xl text-[white] flex justify-center">
            Got Ideas? We've got the capacity.
          </p>
          <p className="flex justify-center text-[red] font-bold lg:text-4xl text-2xl">
            Let's team up
          </p>
          <p className="text-white lg:text-2xl text-1xl font-bold flex justify-center">
            Tell me about yourself and what you got in mind
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url('/images/secondBackground.png')",
        }}
        className="bg-cover h-screen flex bg-no-repeat bg-center"
      >
        <div className="mx-auto lg:w-9/12 mt-12 w-11/12 flex lg:flex-row flex-col">
          <div className="bg-[#424A52] h-5/6  lg:w-6/12 rounded opacity-90">
            <p className="ml-8 mb-10  text-2xl font-bold mt-4 text-[white]">
              Contact us
            </p>
            <form className="flex mt-6 flex-col lg:flex-col  mx-auto ">
              <label className="mb-8">
                <input
                  value={profile.name}
                  onChange={(e) =>
                    setProfle({ ...profile, name: e.target.value })
                  }
                  className="flex w-9/12 h-12 mx-auto rounded"
                  type="text"
                  placeholder="Name"
                />
              </label>
              <label className="mb-8">
                <input
                  value={profile.email}
                  onChange={(e) =>
                    setProfle({ ...profile, email: e.target.value })
                  }
                  className="flex	w-9/12 h-12 mx-auto rounded"
                  type="text"
                  placeholder="Email"
                />
              </label>
              <label>
                <textarea
                  value={profile.message}
                  placeholder="Message"
                  onChange={(e) =>
                    setProfle({ ...profile, message: e.target.value })
                  }
                  className="flex w-9/12 mx-auto	h-20 lg:h-40 rounded"
                ></textarea>
              </label>
              <button
                onClick={handleClick}
                className="bg-[white] rounded h-12 mx-auto w-2/5 hover:bg-[#bc5f5f] hover:text-[white] mt-12"
              >
                Submit
              </button>
            </form>
          </div>
          {/* <div className=" h-5/6  bg-[url('/images/Rectangle74.png')] w-6/12 rounded-r-md opacity-90">....</div> */}
          <Image className="lg:w-6/12 w-full rounded lg:rounded-r-md h-5/6" src={'/images/Rectangle74.png'} width={500} height={500} />
        </div>
      </div>
      <div className="grid grid-cols-3 mx-auto w-10/12 justify-center">
        <div>
          <p className="lg:text-2xl text-sm font-bold mt-8">Popular Searches</p>
          <div className="grid gap-2 flex-col ">
            {PropertyByEmirates.map((ele) => {
              return (
                <a className="" href="/">
                  {ele.title}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="lg:text-2xl text-sm font-bold mt-8">
            Featured Properties
          </p>
          <div className="grid gap-2 flex-col">
            {FeaturedProperties.map((ele) => {
              return (
                <a className="" href="/">
                  {ele.title}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="lg:text-2xl text-sm font-bold mt-8">
            Properties by Emirate
          </p>
          <div className="grid gap-2 flex-col">
            {PopularSearch.map((ele) => {
              return <a className="/">{ele.title}</a>;
            })}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#05A3A3] to-[#226699] w-full h-[70vh] relative">
        <div className="text-[white] relative top-10 lg:top-20 px-5 w-full mx-auto grid lg:grid-cols-5">
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
        <p className="text-2xl font-bold italic mb-16 text-center flex justify-center items-center absolute mx-auto -bottom-1 left-0 right-0 ">
          Copyright2023. All rights reserved, SwapSpace.com
        </p>
      </div>
    </div>
  );
};

export default contact;
