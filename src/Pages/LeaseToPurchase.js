import React, { useState } from "react";
import "./leaseToPurchase.css";
import { Link } from "react-router-dom";
import { BiArrowBack, BiDownArrow } from "react-icons/bi";
const LeaseToPurchase = () => {
  const [isOptions, setIsOptions] = useState(false);
  const [isOptions2, setIsOptions2] = useState(false);
  const [isOptions3, setIsOptions3] = useState(false);
  const [isOptions4, setIsOptions4] = useState(false);
  const [truckType, setTrucktype] = useState(null);
  const [trailerType, setTrailerType] = useState(null);
  const [mileRange, setMileRange] = useState(null);
  const [payment, setPayment] = useState(null);
  const [fileName, setFileName] = useState(null);
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
      <h1 className="lease-title">Lease to purchase</h1>

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
        <div className="option-container">
          <div className="option-cdl">
            <input
              readOnly
              value={truckType}
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
                <p onClick={() => (setTrucktype("Volvo"), setIsOptions(false))}>
                  Volvo
                </p>
                <p
                  onClick={() => (
                    setTrucktype("Kenworth"), setIsOptions(false)
                  )}
                >
                  Kenworth
                </p>
                <p
                  onClick={() => (
                    setTrucktype("Freightliner"), setIsOptions(false)
                  )}
                >
                  Freightliner
                </p>
                <p
                  onClick={() => (
                    setTrucktype("International"), setIsOptions(false)
                  )}
                >
                  International
                </p>
                <p
                  onClick={() => (
                    setTrucktype("Peterbilt"), setIsOptions(false)
                  )}
                >
                  Peterbilt
                </p>
              </div>
            )}
          </div>
          <div className="option-cdl">
            <input
              readOnly
              value={trailerType}
              style={{
                cursor: "pointer",
                color: "#10b098",
                fontWeight: "bold",
              }}
              type="text"
              name="Category"
              placeholder="Select your option"
              onClick={() => setIsOptions2(!isOptions2)}
            />
            <BiDownArrow
              style={{
                position: "absolute",
                top: "17px",
                color: "gray",
                marginLeft: "-30px",
              }}
            />
            {isOptions2 && (
              <div className="options">
                <p
                  onClick={() => (
                    setTrailerType("Flatbed"), setIsOptions2(false)
                  )}
                >
                  Flatbed
                </p>
                <p
                  onClick={() => (
                    setTrailerType("Dry Van"), setIsOptions2(false)
                  )}
                >
                  Dry Van
                </p>
                <p
                  onClick={() => (
                    setTrailerType("Reefer"), setIsOptions2(false)
                  )}
                >
                  Reefer
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="option-container2">
          <div className="option-cdl">
            <input
              readOnly
              value={mileRange}
              style={{
                cursor: "pointer",
                color: "#10b098",
                fontWeight: "bold",
              }}
              type="text"
              name="Category"
              placeholder="Select your option"
              onClick={() => setIsOptions3(!isOptions3)}
            />
            <BiDownArrow
              style={{
                position: "absolute",
                top: "17px",
                color: "gray",
                marginLeft: "-30px",
              }}
            />
            {isOptions3 && (
              <div className="options">
                <p
                  onClick={() => (setMileRange("0--150"), setIsOptions3(false))}
                >
                  0--150
                </p>
                <p
                  onClick={() => (
                    setMileRange("150 -- 300"), setIsOptions3(false)
                  )}
                >
                  150 -- 300
                </p>
                <p
                  onClick={() => (
                    setMileRange("300 -- 500"), setIsOptions3(false)
                  )}
                >
                  300 -- 500
                </p>
                <p
                  onClick={() => (
                    setMileRange("500 -- up ⬆"), setIsOptions3(false)
                  )}
                >
                  500 -- up ⬆
                </p>
              </div>
            )}
          </div>
          <div className="option-cdl">
            <input
              readOnly
              value={payment}
              style={{
                cursor: "pointer",
                color: "#10b098",
                fontWeight: "bold",
              }}
              type="text"
              name="Category"
              placeholder="Select your option"
              onClick={() => setIsOptions4(!isOptions4)}
            />
            <BiDownArrow
              style={{
                position: "absolute",
                top: "17px",
                color: "gray",
                marginLeft: "-30px",
              }}
            />
            {isOptions4 && (
              <div className="options">
                <p onClick={() => (setPayment("$ 5000"), setIsOptions4(false))}>
                  $ 5000
                </p>
                <p
                  onClick={() => (setPayment("$ 10 000"), setIsOptions4(false))}
                >
                  $ 10 000
                </p>
                <p
                  onClick={() => (setPayment("$ 15 000"), setIsOptions4(false))}
                >
                  $ 15 000
                </p>
                <p
                  onClick={() => (setPayment("$ 20 000"), setIsOptions4(false))}
                >
                  $ 20 000
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="option-container3">
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
          <button className="lease-button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default LeaseToPurchase;
