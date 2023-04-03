import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import conf from '../../public/images/conf.png'
import vision from '../../public/images/vision.png'
import tallbuildings from '../../public/images/tallbuildings.png'
import amico from '../../public/images/amico.png'
import rafiki from '../../public/images/rafiki.png'
import pana from '../../public/images/pana.png'
import group from '../../public/images/group.png'
import cuate from '../../public/images/cuate.png'
import customer from '../../public/images/customer.png'

export default function About(){
    return(
        <div className="about-main">
            <div className="about-top">
                <Navbar />
                <h1>About Us</h1>
            </div>
            <div className="about-sec1">
                <div className="sec1-body">
                    <div className="sec1-img"><Image src={conf} alt="me" width="500" height="300" /></div>

                    <div className="sec1-text">
                        <div className="text-cont">
                        <h2>Company Culture</h2>
                        <p>At Swap Space, we value diversity, creativity, and
                           collaboration. We believe that everyone has
                           something valuable to contribute and we celebrate
                           our differences. We foster a culture of innovation,
                           where new ideas are encouraged and everyone is
                           encouraged to take risks and try new things</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-sec2">
                <div className="sec2-body">
                    <h2> <span className="span-about">About</span>  Swap Space</h2>
                    <p>Swap Space is a real estate platform that uses cutting-edge technology to connect people with their perfect home.
                       Our platform is designed to make it easy for users to find properties based on their needs, rather than just their
                       budget. With Swap Space, users can swipe left or right to find properties that meet their specific requirements.</p>
                </div>
            </div>
            <div className="about-sec3">
                <div className="sec3-body">
                    <div className="sec3-body1">
                    <div className="sec3-img"><Image src={tallbuildings} alt="me" width="450" height="300" /></div>
                    <h2>Mission</h2>
                    <p>Our mission is to design a space where users 
                      can easily find their new home with absolute
                       trust in our partners and services for the
                        best service by simply swiping left or right.</p>
                    </div>
                    <div className="sec3-body2">
                    <div className="sec3-img"><Image src={vision} alt="me" width="450" height="300" /></div>
                    <h2>Vision</h2>
                    <p>Our vision is to revolutionize the real estate industry by
                       making it more accessible, transparent, and user-friendly.
                       We want to empower people to find the perfect home for
                       their unique needs, without the stress and hassle of
                    traditional real estate methods.</p>
                    </div>
                    
                </div>
            </div>
            <div className="about-sec4">
                <h2 className="h21"><span className="span-about">Core </span>  Values</h2>
                <div className="sec4-body">
                    <div className="sec4-part">
                    <div className="sec4-img"><Image src={amico} alt="me" width="60" height="60" /></div>
                    <h3 >Innovation</h3>
                    <p>Tangible physical qualities. Logo, colours, symbols, etc.</p>
                    </div> 
                    <div className="sec4-part">
                    <div className="sec4-img"><Image src={group} alt="me" width="60" height="60" /></div>
                    <h3 >Diversity and Inclusion</h3>
                    <p>We embrace diversity and believe that everyone has something valuable to 
                        contribute. We are committed to creating a workplace that is inclusive, supportive, and empowering for all.</p>
                    </div> 
                    <div className="sec4-part">
                    <div className="sec4-img"><Image src={rafiki} alt="me" width="60" height="60" /></div>
                    <h3 >Collaboration</h3>
                    <p>We believe that collaboration is key to success. We work closely 
                        with our partners, employees, and users to create a more transparent and accessible real estate market.</p>
                    </div> 
                    <div className="sec4-part">-
                    <div className="sec4-img"><Image src={pana} alt="me" width="60" height="60" /></div>
                    <h3 >Trust</h3>
                    <p>We believe that trust is essential to our success. We are committed to building strong relationships with
                         our users, partners, and employees, and we work hard to earn and maintain their trust in everything we do.</p>
                    </div> 
                    <div className="sec4-part">
                    <div className="sec4-img"><Image src={customer} alt="me" width="60" height="60" /></div>
                    <h3 >Customer Focus</h3>
                    <p> We are committed to putting the needs of our users first, and we strive to provide the best possible 
                        customer experience at every stage of the real estate journey.</p>
                    </div> 
                    <div className="sec4-part">
                    <div className="sec4-img"><Image src={cuate} alt="me" width="60" height="60" /></div>
                    <h3 >Empowerment</h3>
                    <p>We believe in empowering our employees to take ownership of their 
                        work and make meaningful contributions to the company's success.</p>
                    </div> 
                    
                </div>
                <p className="p1">By embodying these values, we aim to create a culture of excellence and innovation <br />
                   that will enable us to achieve our mission and realize our vision</p>
            </div>
            <Footer />
        </div>
    )
}