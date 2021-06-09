import React from "react";
import "./aboutUs.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="back-test">
        <div className="back-test-container">
          <Link to="/">
            <button className="back-to-home">
              <BiArrowBack style={{ marginRight: "1rem" }} /> Back To Home
            </button>
          </Link>
          <h1>MEGASTAR</h1>
        </div>
      </div>
      {/* <div className="back">
        <Link to="/">
          <button className="back-to-home">
            <BiArrowBack style={{ marginRight: "1rem" }} /> Back To Home
          </button>
        </Link>
      </div> */}
      <h1 className="about-page-title">ABOUT US</h1>
      <div className="about-page-content">
        <div className="first-block">
          <img src="/cargo3d-removebg.png" alt="" />
          <div className="first-block-text">
            <h2>Cargo</h2>
            <p>
              Megastar is the best transport company in USA delivering
              excellence for all types of businesses. We cater to the cargo
              moving requirements of our esteemed customers across USA. We
              strictly adhere to the latest safety and compliance features and
              provide quality service at an affordable rate. We have
              revolutionized transport service in USA with our unique features
              which include cost-effectiveness, latest technology and excellent
              customer service. Our customers define us as the best in the
              industry of truck transportation services in India. We are well
              equipped to comply with the customized requirements of each of our
              customers.
            </p>
          </div>
        </div>

        <div className="second-block">
          <div className="second-block-container">
            <div className="first-block-text">
              <h2>MEGASTAR TECHNOLOGY</h2>
              <p>
                We're curious. We push boundaries through game-changing ideas –
                the kind of advances no one else thinks are possible. We have
                the passion to invest in pioneering technologies that will help
                our customers come out on top.We use our network to help
                customers manage their goods most efficiently throughout their
                supply chains. At the top of our value proposition is an intense
                customer service culture that connects our team worldwide. Our
                people focus on finding new ways to help our customers succeed,
                while becoming continuously more efficient ourselves
              </p>
            </div>
            <img className="about-img" src="/cargo3d-removebg.png" alt="" />
          </div>
        </div>

        <div className="third-block">
          <img src="/cargo3d-removebg.png" alt="" />
          <div className="first-block-text">
            <h2>SAFETY</h2>
            <p>
              We put safety first – for each other, our communities and our
              environment. We do things the right way, the first time. Our
              workplaces are collaborative and supportive. We take care of each
              other and we constantly seek to improve the safety of our
              operations, from trucks and docks to warehouses and datacenters.
              One of our main objectives is to achieve zero job-related injuries
              and accidents. We use training and technology to continuously
              improve our safety ecosystem, and we have{" "}
              <span style={{ color: "#10b098" }}>MEGASTAR</span> safety
              professionals positioned across our operating regions.
            </p>
          </div>
        </div>
      </div>
      <div className="green-line"></div>
    </div>
  );
};

export default AboutUs;
