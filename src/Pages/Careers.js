import React, { useState } from "react";
import "./careers.css";
import { Link } from "react-router-dom";
import { BiArrowBack, BiDownArrow } from "react-icons/bi";
const Careers = () => {
  const [fileName, setFileName] = useState(null);
  const [isOptions, setIsOptions] = useState(false);
  const [singleOption, setSingleOption] = useState(null);
  return (
    <div>
      <div className="back-test">
        <div className="back-test-container">
          <Link to="/">
            <button className="back-to-home">
              <BiArrowBack style={{ marginRight: "1rem" }} /> Back To Home
            </button>
          </Link>
          <h1>MEGASTARINC</h1>
        </div>
      </div>
      <h1 className="careers-title">Join our community</h1>
      <div className="career-info-container">
        <div className="career-info-card">
          <h2>Company Driver</h2>
          <ul>
            <li>- Pay 70 cents per mile</li>
            <li>- $150 layover fee (If it is not drivers fault)</li>
            <li>- Detention $20 per hour (after 2 hours of waiting)</li>
            <li>- Driver bonus (on time pick up and delivery)</li>
            <li>- New Trucks (fridge and microwave)</li>
            <li style={{ fontWeight: "500" }}>- 1099 tax</li>
            <li>- New trucks</li>
          </ul>
        </div>
        <div className="career-info-card">
          <h2>Lease Rent</h2>
          <ul>
            <li>- 15% dispatching fee from the gross</li>
            <li>- Truck rent $800 weekly</li>
            <li>- 13 cent maintenance per mile</li>
            <li>- Trailer rent $250 weekly</li>
            <li>- Insurance depending on driver's record</li>
            <li>- $40 IFTA</li>
            <li>- $75 Logbook (24/7 support)</li>
            <li>- $75 Adminstrative fee</li>
          </ul>
        </div>
        <div className="career-info-card">
          <h2>Owner Operator</h2>
          <ul>
            <li>- 15% dispatching fee from the gross</li>
            <li>- Trailer rent $250 weekly</li>
            <li>- Insurance depending on driver's record</li>
            <li>- $40 IFTA</li>
            <li>- $75 Logbook (24/7 support)</li>
            <li>- $75 Adminstrative fee</li>
          </ul>
        </div>
      </div>

      <form className="careers-form">
        <h1 className="form-title">Application Form</h1>
        <div className="default-infoInput-container">
          <input type="text" name="Name" placeholder="Name" required />
          <input type="text" name="Surname" placeholder="Surname" />
        </div>
        <div className="default-infoInput-container">
          <input type="phone" name="Phone Number" placeholder="Phone Number" />
          <input type="email" name="E-Mail" placeholder="E-Mail" />
        </div>
        <div className="input-option">
          <div className="option-cdl">
            <input
              readOnly
              value={singleOption}
              style={{
                cursor: "pointer",
                color: "#10b098",
                fontWeight: "bold",
              }}
              type="text"
              name="Category"
              placeholder="Select your option"
              onClick={() => setIsOptions(!isOptions)}
            />
            <BiDownArrow
              style={{
                position: "absolute",
                top: "17px",
                color: "gray",
                marginLeft: "-30px",
              }}
            />
            {isOptions && (
              <div className="options">
                <p
                  onClick={() => (
                    setSingleOption("Company Driver"), setIsOptions(false)
                  )}
                >
                  Company Driver
                </p>
                <p
                  onClick={() => (
                    setSingleOption("Lease Rent"), setIsOptions(false)
                  )}
                >
                  Lease Rent
                </p>
                <p
                  onClick={() => (
                    setSingleOption("Owner Operator"), setIsOptions(false)
                  )}
                >
                  Owner Operator
                </p>
              </div>
            )}
          </div>
          <label className="lab">
            <input
              className="file-input"
              style={{ border: "none" }}
              type="file"
              name="Attachment"
              accept="image/png, image/jpeg"
              name="Phone Number"
              onChange={(e) => setFileName(e.target.value.substr(12))}
            />
            {fileName && (
              <span
                style={{
                  fontSize: "14px",
                  color: "#10b098",
                  fontWeight: "bold",
                }}
                className="filename"
              >
                {fileName?.length < 10
                  ? fileName
                  : fileName?.substr(0, 11) + "..."}
              </span>
            )}
          </label>
        </div>
        <button className="send-vacant">Send</button>
      </form>
      <div className="lease-to-purchase">
        <h2>Do you want to apply for Lease to purchase ?</h2>
        <Link to="/lease-to-purchase">
          {" "}
          <button>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Careers;
