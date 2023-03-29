import React from "react";
import Footer from "../components/Footer";
import {
  InformationWeCollect,
  HowWeuseInformation,
  SharingYourInFormation,
  YourChoices,
  ContactUs,
} from "../constants/PrivacyPolicyDate";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#6B94A9] to-[#CFD0D0] h-48 w-full mx-auto grid justify-content items-center">
        <h1 className="mx-auto font-bold text-2xl">Privacy Policy</h1>
      </div>
      <div className="mx-auto justify-left items-start w-10/12">
        <p className=" flex mx-auto justify-center w-full justify-left mt-8">
          At Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ab
          eveniet, repellat delectus magnam animi ducimus consectetur soluta id
          rem, praesentium earum ullam iusto deserunt quos aperiam magni
          accusantium, voluptas rerum dolorum? Cupiditate voluptatum quae
          voluptates ducimus pariatur ipsam repudiandae porro, earum corporis
          vero atque eveniet eum voluptate. Pariatur, nulla.
        </p>
        <div className=" mt-6">
          <p className="mt-6 font-bold">Information we collect</p>
          <p className="font-italic font-light">
            We collect a variety of information from you when you use the
            Service, including
          </p>
          <div>
            <ul className="ml-4">
              {InformationWeCollect.map((ele) => {
                return <li className="list-disc">{ele.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className=" mt-6">
          <p className="mt-6 font-bold">How we use information</p>
          <p className="font-italic font-light">
            We use the information we collect to provide, maintain and improve
            the services, as well as to personlize your experience and
            communicate with you. Specifically we use your information for the
            following purposes
          </p>
          <div>
            <ul className="ml-4">
              {HowWeuseInformation.map((ele) => {
                return <li className="list-disc">{ele.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className=" mt-6">
          <p className="mt-6 font-bold">Sharing your information</p>
          <p className="font-italic font-light">
            We may share your information with third parties for the following
            purposes
          </p>
          <div>
            <ul className="ml-4">
              {SharingYourInFormation.map((ele) => {
                return <li className="list-disc">{ele.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p className="font-bold">Security</p>
          <p>
            We take reasonable measures to protect your personal from
            unauthorized access, use, or disclose, However, please note that no
            method of transmission over the internet, or method of electronic
            storage, is 100% secure. As a result, while we strive to protect
            your personal Information, we cannot guarantee its absolute security
          </p>
        </div>
        <div className=" mt-6">
          <p className="mt-6 font-bold">Your choices</p>
          <p className="font-italic font-light">
            You have certain choices when it comes to the information we collect
            and how we use it. These includes
          </p>
          <div>
            <ul className="ml-4">
              {YourChoices.map((ele) => {
                return <li className="list-disc">{ele.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p className="font-bold">Children's Privacy</p>
          <p>
            The sevice are not intended for the childen under the age of 18. We
            do not knowingly collect personal Information from children under
            the age of 18. if we become aware that the collect inforamtion is
            for persons below 18years we will not hesistate to delete such
            account
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold">Changes to our Privacy Policy</p>
          <p>
            We may update this privacy policy from time to time. If we make any
            material changes, we will notify you by means of a notice on the
            Services or by sending you an email
          </p>
        </div>
        <div className=" mt-6">
          <p className="mt-6 font-bold">Contact us</p>
          <p className="font-italic font-light">
            We collect a variety of information from you when you use the
            Service, including
          </p>
          <div>
            <ul className="ml-4">
              {ContactUs.map((ele) => {
                return <li className="list-disc">{ele.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
