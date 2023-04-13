import React from "react";
import wappstore from "../../public/images/wappstore.png";
import wgoogleplay from "../../public/images/wgoogleplay.png";
import twitter from "../../public/images/twitter.png";
import facebook from "../../public/images/facebook.png";
import linkedln from "../../public/images/linkedln.png";
import dropdown from "../../public/images/dropdown.png";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

export default function Footer() {
  const options = ["Lanugage", "English", "Spanish", "French"];
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="footer-1">
          <div className="footer-img">
            <Image src={Logo} alt="me" width="50" height="64" />
          </div>
          <h3>Swap Space</h3>
          <div className="img-tot">
          <div className="footer-img2">
            <Image src={wappstore} alt="me" width="160" height="55" />
          </div>
          <div className="footer-img3">
            <Image src={wgoogleplay} alt="me" width="160" height="55" />
          </div>
          </div>
          
        </div>
        <div className="footer-2">
          <div className="footer-2h">
            <div className="footer-21">
              <h3>Explore</h3>
              <p>About</p>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            
            <div className="footer-21">
              <h3>Join Us</h3>
              <p>Advertise with us</p>
            </div>
            <div className="footer-21">
              <h3>Countries</h3>
              <p>Dubai, UAE</p>
              <p>Istanbul, Turkey</p>
            </div>
          </div>
        </div>
        <div className="footer-3">
          <div className="socials">
            <div className="footer-img2">
              <Image src={twitter} alt="me" width="24" height="24" />
            </div>
            <div className="footer-img2">
              <Image src={facebook} alt="me" width="24" height="24" />
            </div>
            <div className="footer-img2">
              <Image src={linkedln} alt="me" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
      <div className="lang">
            <select className=" border border-solid border-white  text-[black]  rounded text-sm h-10 w-55px">
              {options.map((ele) => {
                return <option>{ele}</option>;
              })}
            </select>
            </div>
      <div className="copyright">
        <p>copyright2023. All rights reserved. Swapspace.com.</p>
      </div>
      
          
    </div>
  );
}
