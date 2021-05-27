import React from "react";
import { Link } from "react-router-dom";
import "./careerDivider.css";
const CareerDivider = () => {
  return (
    <div className="careerDivider">
      <h1>Want to know more about careers in Megastarinc ?</h1>
      <Link to="/careers">
        <button>READ MORE</button>
      </Link>
    </div>
  );
};

export default CareerDivider;
