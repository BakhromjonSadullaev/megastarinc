import React from "react";
import "./services.css";

import { FaTruckMoving, FaLuggageCart } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import { AiFillContainer } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
const Services = () => {
  return (
    <div className="services">
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              assumenda!
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              assumenda!
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              assumenda!
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              assumenda!
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <FaLuggageCart />
          </div>
          <div className="service-content">
            <h2>WAREHOUSING</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              assumenda!
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <BiWorld />
          </div>
          <div className="service-content">
            <h2>WORLDWIDE TRANSPORTING</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              assumenda!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
