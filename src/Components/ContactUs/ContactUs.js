import React from "react";
import "./contactUs.css";

import { HiLocationMarker, HiMailOpen, HiClock, HiPhone } from "react-icons/hi";

import { MdContactPhone } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="video-info">
        <video muted loop autoPlay>
          <source src="/pitch.mp4" />
        </video>
        <div className="contact-info">
          <div className="contact-info-with-logo">
            <HiLocationMarker />
            <p>14 Tottenhem Court London, England</p>
          </div>
          <div className="contact-info-with-logo">
            <HiMailOpen />
            <p>info@megastarinc.com</p>
          </div>
          <div className="contact-info-with-logo">
            <HiClock />
            <p>Mon-Sat: 9:00-18:00</p>
          </div>
          <div className="contact-info-divider"></div>
          <div className="contact-info-with-logo">
            <HiPhone />
            <p>(102) 6666 8888</p>
          </div>
          <div className="contact-info-with-logo">
            <MdContactPhone />
            <p>102) 8888 9999</p>
          </div>
        </div>
      </div>
      <div className="form-contact">
        <form>
          <h2>Contact us</h2>
          <input className="input-name" placeholder="Name" type="text" />
          <input className="input-email" placeholder="E-Mail" type="email" />
          <textarea
            placeholder="Your Message"
            style={{ resize: "none" }}
            name=""
            id=""
            rows="5"
          ></textarea>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
