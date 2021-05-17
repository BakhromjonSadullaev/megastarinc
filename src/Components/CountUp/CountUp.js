import React, { useState } from "react";
import "./countup.css";
import CountUp from "react-countup";

import { FaProjectDiagram } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import VisibilitySensor from "react-visibility-sensor";
const Count = () => {
  return (
    <div className="countup">
      <div className="count-info">
        <div className="count-icon">
          <FaProjectDiagram />
        </div>
        <div className="counter">
          <CountUp end={96} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
        <p>DELIVERY DONE</p>
      </div>

      <div className="count-info">
        <div className="count-icon">
          <AiTwotoneLike />
        </div>
        <div className="counter">
          <CountUp end={5} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div className="count-info">
        <div className="count-icon">
          <BsPeopleFill />
        </div>
        <div className="counter">
          <CountUp end={46} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
        <p>HARDWORKING PEOPLE</p>
      </div>
      <div className="count-info">
        <div className="count-icon">
          <BiSmile />
        </div>
        <div className="counter">
          <CountUp end={4} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
        <p>BRANCHES</p>
      </div>
    </div>
  );
};

export default Count;
