import React, { useState } from "react";
import Image from "next/image";
import { FeaturedProperties } from "../constants/Featuredproperties";
import { PopularSearch } from "../constants/PopularSearch";
import { PropertyByEmirates } from "../constants/PropertyByEmirates";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
        <Navbar />
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
      
     <Footer />
    </div>
  );
};

export default contact;
