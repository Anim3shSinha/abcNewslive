import React from "react";
import "./Styles/Card.css";
import img from "./download.png";
function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
      <div className="card-content" style={{ textAlign: "center" }}>
        <h5>News Title</h5>
        <h6
          style={{
            backgroundColor: "lightpink",
            padding: "3px",
            borderRadius: "5px",
          }}
        >
          19-2-2022
        </h6>
        <div className="likes">4 likes</div>
      </div>
    </div>
  );
}

export default Card;
