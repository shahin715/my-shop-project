import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529] ">
      <div className="mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 pb-20 pt-5 justify-center gap-6 2xl:pl-50 lg:pl-20">
          {/* Company Details */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left ">
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center sm:justify-start gap-2">
              <FiShoppingBag size="30" />
              ShopNow
            </h1>
            <p className="text-gray-400 mb-6">"Elevate Your Style: Timeless Quality, Unmatched Comfort."</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-xl font-bold mb-4">Important Links</h2>
            <ul className="flex flex-col gap-4 text-gray-300">
              {FooterLinks.map((link) => (
                <li key={link.title} className="cursor-pointer hover:text-primary hover:underline duration-300">
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-xl font-bold mb-4">Let Us Help You</h2>
            <div className="flex flex-col gap-4 text-gray-300">
              <p>Return & Refund Policy</p>
              <p>Terms & Conditions</p>
              <p>FAQ</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="flex items-center gap-3 text-gray-300 mb-4">
              <FaMapLocationDot />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 mb-4">
              <IoCall />
              <p>+880 171234567</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 text-3xl text-gray-300">
              <a href="#" className="hover:text-primary transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-primary transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-primary transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-10 border-t pt-6">
          <p>&copy; 2025 ShopNow. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;



