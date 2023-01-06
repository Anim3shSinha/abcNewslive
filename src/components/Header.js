import React from "react";
import "./Styles/Header.css";
import img from "./logo.png";
import head from "./headline.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={img}
          alt="img"
          style={{ maxWidth: "15%", maxHeight: "10%", borderRadius: "40px" }}
        />
      </div>
      <div className="heading">
        <img
          src={head}
          alt="img"
          style={{ maxWidth: "70%", maxHeight: "90%" }}
        />
      </div>
    </div>
  );
}

export default Header;
