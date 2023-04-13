import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const aboutus = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6B94A9] to-[#CFD0D0] w-full h-[200px] flex items-center justify-center">
        <div className="min-h-fit space-y-3 screen flex flex-col   mx-auto justify-center my-auto items-center">
          <p className="font-bold text-2xl text-center">
            Expand your Audience With Swap space <br /> as a Realtor
          </p>
          <button className="border rounded bg-[#05A3A3] hover:bg-[#87b9e1] w-[200px] h-[70px]">
            Join now
          </button>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-12/12 mx-auto mt-8">
        <div className="flex flex-col lg:flex-col items-start lg:w-3/12 w-9/12 mx-auto">
          <div>
            <p className="font-bold text-[#05A3A3] text-2xl">
              Reach an interested an engaged audience
            </p>
            <p className="border border-grey rounded p-5">
              Make your listing a top priority, Use our app to link to social
              media and get contacted by buyers fast
            </p>
          </div>
          <div>
            <Image
              src="/images/user.png"
              alt="image"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-4">
            <p className="text-[#05A3A3] font-bold text-2xl">
              Manage tasks effortlessly
            </p>
            <p className="border border-grey rounded mt-3 px-6">
              Keep your tasks management feature. Quickly create property
              listings, follow-up with leads and clients, get ready for
              meetings, assign tasks to colleagues for timely completion{" "}
            </p>
          </div>
          <div>
            <Image
              src="/images/Frame1.png"
              alt="image"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="mx-auto lg:mt-20 lg:w-3/12 w-9/12 items-end">
          <div>
            <h1 className="text-[#05A3A3] text-2xl font-bold">
              Get discovered by customers with your profile
            </h1>
            <p className="border border-grey rounded p-5">
              Create a unique profile to build your brand connect customer
              seamessly, and increase presence on the platform
            </p>
          </div>
          <div>
            <Image
              src="/images/Frame2.png"
              alt="image"
              width={300}
              height={300}
            />
          </div>
          <div>
            <p className="text-[#05A3A3] text-2xl font-bold mt-4">
              See who view your listing
            </p>
            <p className="border border-grey rounded p-5">
              With the agent app, you can easily identify who has viewed your
              listening so you can save time by sending personalized email to
              connect with interested customer
            </p>
          </div>
          <div>
            <Image
              src="/images/Frame3.png"
              width={300}
              height={300}
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto justify-center flex align-middle items-center mt-8">
        <button className=" border rounded bg-[#05A3A3] hover:bg-[#87b9e1] w-[200px] h-[70px]">
          Join now
        </button>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default aboutus;
