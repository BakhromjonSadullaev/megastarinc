import React from "react";
import "./footer.css";

import {
  FaLongArrowAltRight,
  FaPhoneAlt,
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiMail } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-comp-info footer-links">
          <h1>MEGASTARINC</h1>
          <p>
            Reliable logistics and transportation worldwide company. Megastarinc
            is the best transport company in USA delivering excellence for all
            types of businesses
          </p>
          <h4>NEWSLETTER SIGNUP</h4>
          <form>
            <input placeholder="Enter Your E-Mail" type="email" />
            <div className="form-icon">
              <FaLongArrowAltRight />
            </div>
          </form>
        </div>
        <div className="footer-links">
          <h3>USEFUL LINKS </h3>
          <div className="useful-links">
            <BsArrowRight />
            <p>About Us</p>
          </div>
          <div className="useful-links">
            <BsArrowRight />
            <p>Our Services</p>
          </div>
          <div className="useful-links">
            <BsArrowRight />
            <p>Careers</p>
          </div>
          <div className="useful-links">
            <BsArrowRight />
            <p>Contact Us</p>
          </div>
        </div>
        <div className="footer-links">
          <h3>TRANSPORT LINKS </h3>
          <div className="useful-links">
            <GoLocation />
            <p>14 Tottenhem Court London, England</p>
          </div>
          <div className="useful-links">
            <FaPhoneAlt />
            <p>(102) 6666 8888</p>
          </div>
          <div className="useful-links">
            <HiMail />
            <p>info@megastarinc.com</p>
          </div>
          <div className="useful-links">
            <MdContactPhone />
            <p>(102) 8888 9999</p>
          </div>
          <div className="useful-links">
            <BsClock />
            <p>Mon-Sat: 9:00-18:00</p>
          </div>
        </div>
      </div>
      <div className="footer-license">
        <div className="footer-icons">
          <FaFacebookF style={{ color: "#10b098" }} className="footer-icons" />
          <FaGooglePlusG className="footer-icons" />
          <FaTwitter className="footer-icons" />
          <FaYoutube className="footer-icons" />
          <FaInstagram className="footer-icons" />
        </div>
        <div className="licence">
          <span>© Copyrights 2021 Megastarinc. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
