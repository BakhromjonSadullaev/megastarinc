import React, { useRef } from "react";
import "./services.css";

import { FaTruckMoving, FaLuggageCart } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import { AiFillContainer } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
const Services = () => {
  return (
    <div id="servicesId" className="services">
      <h1>Our Services</h1>
      <div className="line"></div>
      <div className="services-container">
        <div className="service">
          <div className="service-img">
            <FaTruckMoving />
          </div>
          <div className="service-content">
            <h2>Cargo</h2>
            <p>
              We cater to the cargo moving requirements of our esteemed
              customers across USA.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <FiPackage />
          </div>
          <div className="service-content">
            <h2>PACKAGING AND STORAGE</h2>
            <p>
              We ensure safe packaging, as well as storage and delivery of your
              goods
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <MdMyLocation />
          </div>
          <div className="service-content">
            <h2>DOOR TO DOOR DELIVERY</h2>
            <p>
              The pickup and delivery points does not matter up to our
              experienced drivers
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <AiFillContainer />
          </div>
          <div className="service-content">
            <h2>PACKAGING AND STORAGE</h2>
            <p>
              We ensure safe packaging, as well as storage and delivery of your
              goods
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <FaLuggageCart />
          </div>
          <div className="service-content">
            <h2>GET VERIFIED DRIVERS</h2>
            <p>
              In case, the delivery requires special service, we provide the
              customer with verified drivers
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <BiWorld />
          </div>
          <div className="service-content">
            <h2>SECURE PAYMENT</h2>
            <p>
              Quick and hassle-free online payments are our thing. No hidden
              costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
