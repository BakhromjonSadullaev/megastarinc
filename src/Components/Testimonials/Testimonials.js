import React, { useState } from "react";
import "./testimonials.css";
import { useMediaQuery } from "react-responsive";
import VisibilitySensor from "react-visibility-sensor";
import Carousel from "react-elastic-carousel";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
const Testimonials = () => {
  const [motionMe, setMotionMe] = useState(false);

  const isTablet = useMediaQuery({
    query: "(max-width: 1600px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 1150px)",
  });
  return (
    <div
      id="clientsId"
      style={{
        backgroundImage: "url(/mesh-gradient2.png)",
      }}
      className="testimonials"
    >
      <h1>TESTIMONIALS</h1>
      <div className="line"></div>
      <div className="testimonial-container">
        <Carousel
          enableAutoPlay={true}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="pag-container">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <motion.div
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 0.9 }}
                      className="pag"
                      style={{
                        backgroundColor: `${
                          isActivePage ? "#10b098" : "white"
                        } `,
                      }}
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </div>
            );
          }}
          showArrows={false}
          itemsToShow={isMobile ? 1 : isTablet ? 2 : 3}
        >
          <div className="testimonial">
            <div className="info-testimonial">
              <div className="quote">
                <FaQuoteRight />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi molestiae tenetur quasi illo rerum beatae!
              </p>
              <GoTriangleDown className="triangle" />
            </div>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
              </div>
              <div className="testimonial-text">
                <h3>John Doe</h3>
                <p>Founder & CEO ThemeMove Ltd.</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="info-testimonial">
              <div className="quote">
                <FaQuoteRight />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi molestiae tenetur quasi illo rerum beatae!
              </p>
              <GoTriangleDown className="triangle" />
            </div>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img
                  src="https://images.unsplash.com/photo-1581758687321-1ec1bee6e7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt=""
                />
              </div>
              <div className="testimonial-text">
                <h3>Alisa Merry</h3>
                <p>Founder & CEO ThemeMove Ltd.</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="info-testimonial">
              <div className="quote">
                <FaQuoteRight />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi molestiae tenetur quasi illo rerum beatae!
              </p>
              <GoTriangleDown className="triangle" />
            </div>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img
                  src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  alt=""
                />
              </div>
              <div className="testimonial-text">
                <h3>Mike Stevenson</h3>
                <p>Founder & CEO ThemeMove Ltd.</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="info-testimonial">
              <div className="quote">
                <FaQuoteRight />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi molestiae tenetur quasi illo rerum beatae!
              </p>
              <GoTriangleDown className="triangle" />
            </div>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img
                  src="https://images.unsplash.com/photo-1615751596346-9df8006e5381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
              <div className="testimonial-text">
                <h3>Daria Volkova</h3>
                <p>Founder & CEO ThemeMove Ltd.</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
