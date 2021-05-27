import React, { useState } from "react";
import "./questions.css";

import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { RiLuggageCartLine } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";
import { AiFillPieChart } from "react-icons/ai";
const Questions = () => {
  const [showAns, setShowAns] = useState(false);
  const [showAns1, setShowAns1] = useState(false);
  const [showAns2, setShowAns2] = useState(false);
  const [showAns3, setShowAns3] = useState(false);
  return (
    <div className="questions-section">
      <div className="question-container">
        <h1 className="question-title">What makes us special ?</h1>
        <div className="question">
          <div className="question-header">
            <div
              onClick={() => (
                setShowAns(!showAns),
                setShowAns1(false),
                setShowAns2(false),
                setShowAns3(false)
              )}
              style={{
                backgroundColor: `${showAns ? "#10b098" : "#efefef"}`,
                color: `${showAns ? "white" : "#c7c7c7"}`,
              }}
              className="question-button"
            >
              {showAns ? <GoTriangleDown /> : <GoTriangleRight />}
            </div>
            <div className="question-logo">
              <AiFillPieChart className="quest-icon" />
              <h4>We are creative and Professional</h4>
            </div>
          </div>
          {showAns && (
            <div className="question-content">
              We have the ability to think about a task or a problem in a new or
              different way, or to use the imagination to generate new ideas.
              Creativity enables us to solve complex problems or find
              interesting ways to approach tasks.
            </div>
          )}
        </div>

        {/* question 1 */}
        <div className="question">
          <div className="question-header">
            <div
              onClick={() => (
                setShowAns(false),
                setShowAns1(!showAns1),
                setShowAns2(false),
                setShowAns3(false)
              )}
              style={{
                backgroundColor: `${showAns1 ? "#10b098" : "#eaeaea"}`,
                color: `${showAns1 ? "white" : "#c7c7c7"}`,
              }}
              className="question-button"
            >
              {showAns1 ? <GoTriangleDown /> : <GoTriangleRight />}
            </div>
            <div className="question-logo">
              <ImAirplane className="quest-icon" />
              <h4>Honest and Dependable</h4>
            </div>
          </div>
          {showAns1 && (
            <div className="question-content">
              We are reliable, supportive and honest. Quality over quantity
              applies to friendships as much as anything else in life. So our
              clients and our community as the whole family for us !
            </div>
          )}
        </div>

        {/* question 2 */}
        <div className="question">
          <div className="question-header">
            <div
              onClick={() => (
                setShowAns(false),
                setShowAns1(false),
                setShowAns2(!showAns2),
                setShowAns3(false)
              )}
              style={{
                backgroundColor: `${showAns2 ? "#10b098" : "#eaeaea"}`,
                color: `${showAns2 ? "white" : "#c7c7c7"}`,
              }}
              className="question-button"
            >
              {showAns2 ? <GoTriangleDown /> : <GoTriangleRight />}
            </div>
            <div className="question-logo">
              <RiLuggageCartLine className="quest-icon" />
              <h4>Quality Commitment</h4>
            </div>
          </div>
          {showAns2 && (
            <div className="question-content">
              We are always looking for ways to deliver quality service with our
              team and we will succeed !
            </div>
          )}
        </div>

        {/* question 3 */}
        <div className="question">
          <div className="question-header">
            <div
              onClick={() => (
                setShowAns(false),
                setShowAns1(false),
                setShowAns2(false),
                setShowAns3(!showAns3)
              )}
              style={{
                backgroundColor: `${showAns3 ? "#10b098" : "#eaeaea"}`,
                color: `${showAns3 ? "white" : "#c7c7c7"}`,
              }}
              className="question-button"
            >
              {showAns3 ? <GoTriangleDown /> : <GoTriangleRight />}
            </div>
            <div className="question-logo">
              <BiWorld className="quest-icon" />
              <h4>We are always improving</h4>
            </div>
          </div>
          {showAns3 && (
            <div className="question-content">
              The main purpose of Megastarinc is to explore new ways of
              improvement for satisfying clients and being in the high rank
              among competitors
            </div>
          )}
        </div>
      </div>
      <div className="video-section">
        <video className="questions-video" autoPlay muted loop>
          <source src="/carriage.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Questions;
