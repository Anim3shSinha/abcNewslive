import React from "react";
import "./Styles/Navbar.css";
import img from "./logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <img className="logo" src={img} alt="img" height="70px" width="70px" />
      </div>
      <div className="pages-active">Home</div>
      <div className="pages">Entertainment</div>
      <div className="pages">Science</div>
      <div className="pages">Sports</div>
      <div className="pages">Bussiness</div>
      <div className="pages">Films</div>
    </div>
  );
}

export default Navbar;
