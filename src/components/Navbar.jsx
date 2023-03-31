import Image from 'next/image'
import Logo from '../../public/images/Logo.png'
import React from "react";




export default function Navbar(){
    return(
      <div className= "navbar">
         <div className= "swap-logo"><Image src={Logo} alt="me" width="36" height="49" /></div>
         <div className = "menu">
           <div>About</div>
           <div>Contact Us</div>
           <div>FAQ</div>
         </div>
         <button className = "download-btn">Download App</button>
       </div>
    )
}