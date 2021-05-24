import React, { useEffect, useState } from "react";
import "./homebanner.css";
import { motion } from "framer-motion";
// import background from "/mesh-gradient1.png";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  const menuVariants = {
    opened: {
      top: 65,
      width: "100%",
      height: "100vh",
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      top: "-150vh",
      width: "100%",
      height: "100vh",
    },
  };

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isRoute, setIsRoute] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = `${
      showBurgerMenu && isRoute == false ? "hidden" : "scroll"
    } `;
  }, []);

  return (
    <div
      className="Homebanner"
      //   style={{
      //     backgroundImage:
      //       "url(https://t4.ftcdn.net/jpg/02/64/94/97/240_F_264949746_IMGqyPqK4r6k5jSibsOcMpnhtmna5c7E.jpg)",
      //   }}
    >
      <div className="banner-content">
        <header>
          <div className="header-container">
            <div className="min-logo">
              <div className="min-logo-container">
                <h1>MEGASTARINC</h1>
              </div>
              <div
                onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                className="min-burger"
              >
                <HiOutlineMenuAlt3 />
              </div>
            </div>

            <div className="logo-container">
              <FaFacebookF className="logo" />
              <FaGooglePlusG className="logo" />
              <FaTwitter className="logo" />
              <FaInstagram className="logo" />
              <FaYoutube className="logo" />
            </div>
            <div className="header-info">
              <div className="info">
                <FaHome />
                <p>14 Tottenhem Court Road</p>
              </div>
              <div className="info">
                <FaPhoneAlt />
                <p>1-777-77-777</p>
              </div>
              <div className="info">
                <FaRegClock />
                <p>Mon-Sat:9AM-6PM</p>
              </div>
            </div>
          </div>
        </header>

        <motion.div
          initial={false}
          animate={showBurgerMenu ? "opened" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="burger-menu"
        >
          <div style={{ display: "none" }}>{}</div>
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
            className="burger-links"
          >
            <p
              onClick={() => (
                setShowBurgerMenu(false), console.log(showBurgerMenu)
              )}
            >
              Home
            </p>
            <Link to="/careers">
              <p onClick={() => setShowBurgerMenu(true)}>Careers</p>
            </Link>
            <p
              onClick={() => (
                setShowBurgerMenu(false), console.log(showBurgerMenu)
              )}
            >
              Our Services
            </p>
            <Link style={{ textDecoration: "none" }} to="about-us">
              <p
                onClick={() => (
                  setIsRoute(true),
                  setShowBurgerMenu(false),
                  console.log(showBurgerMenu)
                )}
              >
                About Us
              </p>
            </Link>
            <p onClick={() => setShowBurgerMenu(true)}>News</p>
            <p onClick={() => setShowBurgerMenu(true)}>Contact Us</p>
          </motion.div>
          <div className="burger-info">
            <div className="burger-logo">
              <FaFacebookF
                onClick={() => setShowBurgerMenu(true)}
                className="logo-burger"
              />
              <FaGooglePlusG
                onClick={() => setShowBurgerMenu(true)}
                className="logo-burger"
              />
              <FaTwitter
                onClick={() => setShowBurgerMenu(true)}
                className="logo-burger"
              />
              <FaInstagram
                onClick={() => setShowBurgerMenu(true)}
                className="logo-burger"
              />
              <FaYoutube
                onClick={() => setShowBurgerMenu(true)}
                className="logo-burger"
              />
            </div>
            <div>
              <div className="info-burger">
                <FaHome />
                <p>14 Tottenhem Court Road</p>
              </div>
              <div className="info-burger">
                <FaPhoneAlt />
                <p>1-777-77-777</p>
              </div>
              <div className="info-burger">
                <FaRegClock />
                <p>Mon-Sat:9AM-6PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <nav>
          <div className="logo">
            <h1>MEGASTARINC</h1>
          </div>
          <div className="nav-menu">
            <p>Home</p>
            <Link to="careers">
              <p>Careers</p>
            </Link>
            <p>Our Services</p>
            <Link
              style={{ textDecoration: "none", textDecorationColor: "red" }}
              to="about-us"
            >
              <p>About Us</p>
            </Link>
            <p>News</p>
            <p>Contact Us</p>
          </div>
        </nav>
        <div className="banner-info">
          <div className="banner-text">
            <h1>UNBEATABLE TRUCKING & TRANSPORT SERVICES</h1>
            <p>
              Reliable logistics and transportation worldwide company.
              Megastarinc is the best transport company in USA delivering
              excellence for all types of businesses
            </p>
            <div className="button-container">
              <Link to="about-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="read-button"
                >
                  READ MORE
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="contact-button"
              >
                CONTACT US
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="banner-img"
          >
            <img src="/crop.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
