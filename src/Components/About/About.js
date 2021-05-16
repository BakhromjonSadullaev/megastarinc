import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <h1>About US</h1>
      <div className="line"></div>
      <p>
        We have revolutionized transport service in USA with our unique features
        which include cost-effectiveness, latest technology and excellent
        customer service.
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
            We cater to the cargo moving requirements of our esteemed customers
            across USA. We deliver your cargo safe and on time.
          </p>
          <Link to="about-us">
            <div className="about-link">
              <a>Read More</a>
              <BsArrowRight style={{ fontSize: "1.6rem" }} />
            </div>
          </Link>
        </div>
        <div className="about-content">
          <div className="img-holder">
            <img
              src="https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
            />
          </div>
          <h3>MEGASTARINC TECHNOLOGY</h3>
          <p>
            Our advanced solutions simplify shipping. You want your shipments to
            move as efficiently and as safely as possible.
          </p>
          <Link to="about-us">
            <div className="about-link">
              <a>Read More</a>
              <BsArrowRight style={{ fontSize: "1.6rem" }} />
            </div>
          </Link>
        </div>
        <div className="about-content">
          <div className="img-holder">
            <img
              src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <h3>SAFETY</h3>
          <p>
            We put safety first – for each other, our communities and our
            environment. We do things the right way, the first time. We are
            collaborative and supportive.
          </p>
          <Link to="about-us">
            <div className="about-link">
              <a>Read More</a>
              <BsArrowRight style={{ fontSize: "1.6rem" }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
