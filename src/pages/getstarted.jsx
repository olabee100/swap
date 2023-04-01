import React from "react";
import Image from "next/image";
import { AiOutlineApple } from "react-icons/ai";
import Footer from "@/components/Footer";

const getstarted = () => {
  const handleClick = () => {
    console.log("download application");
  };
  const bg = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div className="w-full">
      <div
        style={bg}
        className="bg-[url('/images/getStartedImage.png')] h-[600px] w-full bg-cover bg-center bg-no-repeat "
      >
        <div className="flex lg:flex-row flex-col mx-auto justify-around w-11/12">
          <div className="lg:w-4/12 w-11/12 ">
            <p className="text-[#05A3A3] lg:text-4xl text-2xl lg:text-left text-center">
              Home Matching With Ease
            </p>
            <p className="lg:text-2xl text-1xl text-[white] mt-6 lg:text-left text-center">
              {" "}
              Get the home of your dreams easily with our top-rated swiping app
              on IOS and Andriod
            </p>
            <div className="flex space-x-5 mt-8">
              <div className="bg-[black] text-[white] text-sm h-16 w-40 text-center cursor-pointer border rounded-lg flex">
                <div className="flex mt-2 mx-auto">
                  <AiOutlineApple className="flex w-10 h-10" />
                  <p className="text-sm text-center italic">
                    Download on the<span className=""> Play store</span>
                  </p>
                </div>
              </div>
              <div
                className="bg-[black] text-[white] text-sm h-16 w-40 text-center cursor-pointer border rounded-lg flex"
                onClick={handleClick}
              >
                <div className="flex mt-2 mx-auto">
                  <AiOutlineApple className="flex w-10 h-10" />
                  <p className="text-sm text-center italic">
                    Download on the<span className=""> Play store</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 mt-8 flex lg:w-4/12 w-11/12 justify-end items-end">
            <Image
              src="/images/swipephone.png"
              alt="image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div className="w-9/12 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-11/12 lg:w-4/12">
            <Image
              src="/images/phone_getstarted.png"
              alt="image"
              width={400}
              height={400}
            />
          </div>
          <div className=" w-11/12 lg:w-4/12 mt-32">
            <p className="text-[30px] text-[#05A3A3]">
              Quickly find what you need
            </p>
            <p className="text-[black] text-1xl mt-2">
              Refine your search with our filters and save it for later. Share
              with a partner to compare favourites and stay ahead of competition
              with our updated listings
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[700px] bg-gradient-to-r from-[#424A52] to-[#C1694F]">
        <div className="flex lg:flex-row space-y-9 flex-col mx-auto justify-between w-10/12">
          <div className="w-10/12 lg:w-4/12 mt-20 lg:mt-36">
            <p className="text-[white] text-2xl">
              Virtually explore properties from your home
            </p>
            <p className="text-[black] mt-8 text-1xl">
              Explore properties with a swap spac broker who will help you find
              the perfect place at the right place, or take a virtual tour from
              anywhere. Contactless meetings keep you safe till when you are
              ready to visit in person
            </p>
          </div>
          <div className="w-11/12 justify-center  lg:w-6/12 flex lg:justify-end mt-22 lg:mt-32">
            <div
              style={bg}
              className=" rounded-lg flex justify-end bg-[url('/images/phonebackground.png')] h-350 lg:h-[400px] w-9/12 bg-cover bg-center bg-no-repeat "
            >
              <Image
                className="lg:mt-60 mt-12 lg:h-[700px] h-[350px]"
                src="/images/phone.png"
                alt="image"
                width={300}
                height={1}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default getstarted;
