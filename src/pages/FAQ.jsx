import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import faqread from '../../public/images/faqread.png'
import Image from 'next/image'


export default function FAQ(){
return(
    <div className="faq-main">
        <div className="faq-top">
            <Navbar />
            <div className="top-img"></div>
        </div>

        <div className="faq-mid">
            <div className="faq-text">
            <div className="faq-read">
                <p>What is Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} className="faq-cont" alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How does Swap Space work?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>Is Swap Space available in my city?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How much does it cost to use Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>Can I trust the properties listed on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How can I contact customer support?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>Can I list my property on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How can I cancel a viewing or appointment?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>What happens after I find my new home on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>Is my personal information secure on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How do I schedule a virtual tour of a property?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>Can I take a virtual tour of a property before I book it?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How long do virtual tours usually last?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>What types of properties are available on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How can I search for properties on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>Can I save properties that I'm interested in?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How do I contact a real estate agent on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            <div className="faq-read">
                <p>How do I list my property on Swap Space?</p>
                <div className="faq-cont"><Image src={faqread} alt="me" width="20" height="20" /></div>
            </div>
              <hr />
            
            </div>
        
        </div>
        <Footer />
    </div>
)
}