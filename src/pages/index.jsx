
import Image from 'next/image'

import phone from '../../public/images/phone.png'
import home from '../../public/images/home.png'
import offerimage from '../../public/images/offerimage.png'
import phone2 from '../../public/images/phone2.png'
import Appstore from '../../public/images/Appstore.png'
import googleplay from '../../public/images/googleplay.png'
import earpod from '../../public/images/earpod.png'
import buildings from '../../public/images/buildings.png'
import leftphone from '../../public/images/leftphone.png'
import rightphone from '../../public/images/rightphone.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import bungalow from '../../public/images/bungalow.png'
import twostorey from '../../public/images/twostorey.png'
import mansion from '../../public/images/mansion.png'
import firstphone from '../../public/images/firstphone.png'
import laptop from '../../public/images//laptop.png'
import book from '../../public/images/book.png'
import together from '../../public/images/together.png'

export default function Home() {
  return (
    <>
    <div className="Frontpage-main">
      <div className="top-section">
       <Navbar />
       <div className="body-top">
       <div className ="top-text">
         <h1>The Easiest way to find <br /> your perfect <span className="span-green">home.</span> </h1>
         <p>We provide you with the smartest means to rent, buy and sell <br />
         properties with trusted agents by swiping right.</p>
       </div>
      <div className= "phone-img">
         <div className="image-container">
       <div className="image">
         <Image src={firstphone} alt="me" width="238" height="447" classname="middle"/>
         </div>
         <div className="image">
         <Image src={leftphone} alt="me" width="359" height="447" className="left"/>
        </div>
        <div className="image">
          <Image src={rightphone} alt="me" width="359" height="447" className="right"/>
         </div>
          </div>
       </div>
       </div>
      </div>
       <div className="midsec1">
          <div className="home-img">
          <div className="home-container">
            <div className="house-img">
            <Image src={home} alt="me" width="450" height="391" />
            </div>
            <div className="house-img">
            <Image src={bungalow} alt="me" width="450" height="391" />
            </div>
            <div className="house-img">
            <Image src={twostorey} alt="me" width="450" height="391" />
            </div>
            <div className="house-img">
            <Image src={mansion} alt="me" width="450" height="391" />
            </div>
            </div>
            </div>
          <div className="sec1-text" >
            <h2 className="span-green">Who we are</h2>
            <p>We are here to provide you with all the essentials you need to  make your dream home a reality.
            Whether it's buying or selling  a home, we want to make the process as easy as possible. </p>

            
            <p>Browse our selection of properties, learn more about the process of buying or selling a property,
            and find the best real  estate agent in yout area. Our partner of experienced agents 
             will help you find the perfect property</p>

             <button className = "download-btn">Get started</button>
          </div>

       </div>
       <div className="midsec2">
         <h2> <span className="span-spec"> What </span> we offer</h2>
         <p>We offer special services such as property buying and selling, property listings,  viewings, <br /> negotiation and legal preparations to help you purchase a property by an agent. Enjoy 
        <br /> quality housing in a desirable location. We have a wide range of properties <br /> to suit your unique style</p>
         <div className ="offer-cont">
          <div className="offer">
          <div className="offerimg"><Image src={offerimage} alt="me" width="270" height="184" /></div>
          <h3>Commercial Property</h3>
          <p> We prioritize process excellence. That’s why we offer premier business properties, from offices to resorts, to ensure efficient operations in a pleasant atmosphere.</p>
          </div>
          <div className="offer">
          <div className="offerimg"><Image src={offerimage} alt="me" width="270" height="184" /></div>
          <h3>Residential Property</h3>
          <p> We offer rental, lease and sale of residential apartments. From townhouse to rooftop views, while seeking the right comfort at your own pace.</p>
          </div>
          <div className="offer">
          <div className="offerimg"><Image src={offerimage} alt="me" width="270" height="184" /></div>
          <h3>Short-lets</h3>
          <p>Unlock a greater freedom of movement with fully-furnished apartment rentals, for days or weeks- a more affordable option than hotels for business travellers.</p>
          </div>
         </div>
       </div>
       <div className="midsec3">
         <div className="swipe-text">
            <div className="swipe-cont">
              <h2>Endless Swipes</h2>
              <p>Swipe continuously until you find the perfect home</p>
           <div className="play-img">
           <Image src={Appstore} alt="me" width="160" height="55" />
           <Image src={googleplay} alt="me" width="160" height="55" />
           </div>
           </div>
           
         </div>
         <div className="swipe-img"><Image src={phone2} alt="me" width="250" height="450" /></div>
         
        </div>

        <div className="midsec4">
          <h2> <span className="span-spec2"> What you</span> stand to benefit</h2>
          <div className="midsec4-cont">
          <div className="midsec4-main">
          <div className="midsec4-animate">
          <div className="midsec4-img"><Image src={earpod} alt="me" width="520" height="350" /></div>
          <div className="midsec4-text">
            <h2>Virtual Tour & 3D Walk-Througs</h2>
            <p>Allow users to explore properties from the comfort of 
                their own home, reducing the need for in-person 
                 visits and saving time.</p>
          </div>
          </div>
          
          
          <div className="midsec4-animate">
          <div className="midsec4-img"><Image src={laptop} alt="me" width="520" height="350" /></div>
          <div className="midsec4-text">
            <h2>Personalized Search Fliters</h2>
            <p>Users can easily find properties that match their 
specific preferences and requirements.</p>
          </div>
          </div>
          
          
          <div className="midsec4-animate">
          <div className="midsec4-img"><Image src={book} alt="me" width="520" height="350" /></div>
          <div className="midsec4-text">
            <h2>Online Contract Signing</h2>
            <p>Allow users to explore properties from the comfort of 
their own home, redo Streamline the buying and selling process by allowing users to sign contracts electronically,
 reducing the need for in-person meetings and paper work, the need for in-person  visits and saving time.</p>
          </div>
          </div>
          
          <div className="midsec4-animate">
          <div className="midsec4-img"><Image src={together} alt="me" width="520" height="350" /></div>
          <div className="midsec4-text">
            <h2>Trustworthy Partners</h2>
            <p>Our vetted Partners and services will ensure a smooth 
and trustworthy transaction.</p>
          </div>
          </div>
          </div>
          </div>
        </div>
        <div className="midsec5">
          <h2><span className="span-spec2"> Uncover The Value</span> by Connecting With Swap Space</h2>
          <div className="midsec5-main">
            <div className="midsec5-cont">
          <div className="midsec5-body">
            <div className="midsec5-text">
            <p>Swipe right to instantly connect with
               an agent and discover your ideal 
               property, in the best location.</p>
               <button className = "download-btn">Download App now</button>
               </div>
          </div>
          </div>
            <div className="midsec5-cont">
          <div className="midsec5-body2">
            <div className="midsec5-text">
            <p>Acquire new leads quickly, manage 
and strategies properties with your 
team on-the- go while you connect 
quickly with buyers and sellers in 
one hand.</p>
               <button className = "download-btn">Download App now</button>
               </div>
          </div>
          </div>
            <div className="midsec5-cont">
          <div className="midsec5-body3">
            <div className="midsec5-text">
            <p>Have access to 10,000+ properties
at your own comfort. Making buying
or renting experience easier and 
faster with trusted and reliable 
agents around you</p>
               <button className = "download-btn">Download App now</button>
               </div>
          </div>
          </div>
          </div>
        </div>
      <div className="midsec6">
        <div className="midsec6-text">
          <div className="midsec6-cont">
          <h2><span className="span-spec2">About</span> Us</h2>
          <p>Swap Space is a real estate platform that uses
             cutting-edge technology to connect people
             with their perfect home. Our platform is 
             designed to make it easy for users to find
             properties based on their needs, rather than
             just their budget. With Swap Space, users can
             swipe left or right to find properties that meet
             their specific requirements.</p>
             </div>
        </div>
        <div className="midsec6-img"><Image src={buildings} alt="me" width="520" height="350" /></div>
      </div>
     <Footer />
    </div>
    </>
  )
}
