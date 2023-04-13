import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import faqread from '../../public/images/faqread.png'
import minus from '../../public/images/minus.png'
import Image from 'next/image'
import { useState } from 'react'

const questions = [
  {
    title: 'What is Swap Space?',
    content: 'Swap Space is a platform that helps people find their new home easily and quickly by swiping left or right on properties. We partner with real estate agencies to offer a wide selection of properties and portfolios.'
  },
  {
    title: 'How does Swap Space work?',
    content: 'Users can create an account and start swiping on properties to find their new home. They can filter their search by location, price, and other criteria. Once they find a property they like, they can schedule a viewing or request more information'
  },
  {
    title: 'Is Swap Space available in my city?',
    content: 'We are constantly expanding our network of real estate agencies and properties. You can check if Swap Space is available in your city by entering your location on our homepage.'
  },
  {
    title: 'How much does it cost to use Swap Space?',
    content: 'Our platform is free to use for users.'
  },
  {
    title: 'Can I trust the properties listed on Swap Space?',
    content: 'We partner with reputable real estate agencies that have been vetted by our team. We also verify each property before it is listed on our platform.'
  },
  {
    title: 'How can I contact customer support?',
    content: 'You can contact our customer support team through the contact form on our website or by sending an email to support@swapspace.live. We strive to respond to all inquiries within 24 hours'
  },
  {
    title: 'Can I list my property on Swap Space?',
    content: 'We currently only work with real estate agencies to offer properties on our platform. If you are a real estate agency interested in partnering with us, please contact our business development team.'
  },
  {
    title: 'How can I cancel a viewing or appointment?',
    content: 'You can cancel a viewing or appointment by contacting the real estate agency directly though our platform.Our platform is free to use for users.'
  },
  {
    title: 'What happens after I find my new home on Swap Space?',
    content: 'Once you find your new home on Swap Space, you will work directly with the real estate agency to complete the transaction. Our platform is designed to make the process of finding a new home easier and faster, but we do not handle the transaction itself.'
  },
  {
    title: 'Is my personal information secure on Swap Space?',
    content: 'Yes, we take the security and privacy of our users seriously. We use industry-standard encryption and security measures to protect your personal information. For more information, please see our privacy policy on our website'
  },
  {
    title: 'How do I schedule a virtual tour of a property?',
    content: 'You can schedule a virtual tour of a property by visiting the property listing on our mobile application and clicking on the "Schedule a Virtual Tour" button. This will allow you to select a date and time for the virtual tour, which will be conducted via video chat with one of our agents.'
  },
  {
    title: 'Can I take a virtual tour of a property before I book it?',
    content: 'Yes, we offer virtual tours of all of our properties so that you can get a better sense of the space before you book it. These tours are conducted by our agents and can be scheduled through the property listing on our mobile application.'
  },
  {
    title: 'How long do virtual tours usually last?',
    content: "Virtual tours usually last between 30 and 60 minutes, depending on the size and complexity of the property. During the tour, you'll have the opportunity to ask questions and get a closer look at the property's features and amenities."
  },
  {
    title: 'What types of properties are available on Swap Space?',
    content: 'Swap Space offers a wide range of properties, including apartments, houses, townhouses, condos, and more. Our inventory is constantly growing, so be sure to check back often to see the latest listings.'
  },
  {
    title: 'How can I search for properties on Swap Space?',
    content: 'You can search for properties on Swap Space by using our user-friendly search tool. Simply enter your preferred location, property type, and other search criteria, and our platform will generate a list of relevant properties for you to browse. You can also use our filters to narrow down your search results based on price range, number of bedrooms, and other factors.'
  },
  {
    title: "Can I save properties that I'm interested in?",
    content: "Yes, you can save properties that you're interested in by creating an account on Swap Space. Simply sign up for a free account, and you'll be able to save your favorite properties, set up alerts for new listings, and more."
  },
  {
    title: 'How do I contact a real estate agent on Swap Space?',
    content: "If you're interested in a property and would like to speak to a real estate agent, simply click on the 'Contact Agent' button on the listing page. This will allow you to send a message directly to the agent, who will then get in touch with you to discuss the property in more detail."
  },
  {
    title: 'How do I list my property on Swap Space?',
    content: "If you're a real estate agent or property manager and would like to list your property on Swap Space, simply create an account and follow the instructions to upload your property details and photos. Once your listing has been approved, it will be visible to potential buyers and renters on our platform."
  },
 
  
];

const FAQ = () => {
  const [visibleQuestionIndex, setVisibleQuestionIndex] = useState(-1);

  const toggleContentVisibility = (index) => {
    if (index === visibleQuestionIndex) {
      setVisibleQuestionIndex(-1);
    } else {
      setVisibleQuestionIndex(index);
    }
  };

  return (
    <div className="faq-main">
      <div className="faq-top">
        <Navbar />
        <div className="top-img"></div>
      </div>
      <div className="faq-mid">
        <div className="faq-text">
          {questions.map((question, index) => (
            <div key={index} className="faq-read" onClick={() => toggleContentVisibility(index)}>
              <div className="flex justify-between items-center leading-12">
                <p className="font-medium ">{question.title}</p>
                <div className="faq-cont">
                  {index === visibleQuestionIndex ? (
                    <Image src={minus} alt="minus icon" width="20" height="20" />
                  ) : (
                    <Image src={faqread} alt="plus icon" width="20" height="20" />
                  )}
                </div>
                
              </div>
              <hr className="my-4" />
              {index === visibleQuestionIndex && (
                <>
                  
                  <ul className="toggle-content">
                    <li className="  leading-7 font-normal text-[20px] list-disc">{question.content}</li>
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
