import React from "react";
import Card from "./Card";
import "./Styles/Cards.css";

function Cards() {
  return (
    <>
      <h3
        style={{
          backgroundColor: "pink",
        }}
      >
        <span
          style={{
            backgroundColor: "rgb(223, 136, 36)",
            paddingLeft: "30px",
            paddingRight: "30px",
            color: "white",
          }}
        >
          Explore more..
        </span>
      </h3>
      <div className="cards-holder">
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Cards;
