import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <div className="about">
      <h1>About US</h1>
      <div className="line"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quia.
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
      </p>

      <div className="about-content-container">
        <div className="about-content">
          <div className="img-holder">
            <img
              src="https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <h3>Cargo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            delectus repudiandae facilis libero hic perferendis.
          </p>
          <div className="about-link">
            <a>Read More</a>
            <BsArrowRight style={{ fontSize: "1.6rem" }} />
          </div>
        </div>
        <div className="about-content">
          <div className="img-holder">
            <img
              src="https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
            />
          </div>
          <h3>WAREHOUSING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            delectus repudiandae facilis libero hic perferendis.
          </p>
          <div className="about-link">
            <a>Read More</a>
            <BsArrowRight style={{ fontSize: "1.6rem" }} />
          </div>
        </div>
        <div className="about-content">
          <div className="img-holder">
            <img
              src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <h3>DESTINATION POSSIBILITIES</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            delectus repudiandae facilis libero hic perferendis.
          </p>
          <div className="about-link">
            <a>Read More</a>
            <BsArrowRight style={{ fontSize: "1.6rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
