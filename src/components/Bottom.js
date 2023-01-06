import React from "react";
import Cards from "./Cards";
import "./Styles/bottom.css";
function Bottom() {
  return (
    <div className="down-bottom">
      <div className="bottom-left">
        <Cards />
      </div>
      <div className="bottom-right">
        <h3
          style={{
            backgroundColor: "pink",
          }}
        >
          <span
            style={{
              backgroundColor: "black",
              paddingLeft: "30px",
              paddingRight: "30px",
              color: "white",
            }}
          >
            Stay Connected
          </span>
        </h3>
        <h3
          className="handle"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          facebook
        </h3>
        <h3
          className="handle"
          style={{
            backgroundColor: "pink",
            color: "white",
            padding: "5px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          instagram
        </h3>
        <h3
          className="handle"
          style={{
            backgroundColor: "lightblue",
            color: "white",
            padding: "5px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          twitter
        </h3>
        <h3
          className="handle"
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",
            padding: "5px",
            textAlign: "center",
          }}
        >
          youtube
        </h3>
        <div
          className="subs"
          style={{
            textAlign: "center",
            border: "2px solid gray",
            borderRadius: "10px",
            width: "80%",
            padding: "5px",
            margin: "auto",
          }}
        >
          <h3> Subscribe to our new stories</h3>
          <input type="text" placeholder="Enter your Email" />
          <button style={{ marginLeft: "5px" }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
