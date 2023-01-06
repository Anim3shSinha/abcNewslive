import React from "react";
import "./Styles/TopContent.css";

function TopContent() {
  return (
    <div className="container">
      <div className="left" style={{ position: "relative" }}>
        <div
          className="news-content"
          style={{
            textAlign: "center",
            color: "black",
          }}
        >
          <div
            className="title"
            style={{
              position: "absolute",
              bottom: "0px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              opacity: " 0.6",
              left: "0",
              right: "0",
            }}
          >
            <h1>News title</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque mi
            perspiciatis, harum impedit quis quibusdam, alias architecto!{" "}
            <span style={{ color: "black" }}>
              {" "}
              <button
                style={{ border: "none", padding: "0", fontWeight: "bold" }}
              >
                read more...
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top" style={{ position: "relative" }}>
          <div
            className="news-content"
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            <div
              className="title"
              style={{
                position: "absolute",
                bottom: "0px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                opacity: " 0.6",
                left: "0",
                right: "0",
                fontWeight: "bold",
              }}
            >
              <h3>News title</h3>
              sit nostrum beatae animi perspiciatis, harum impedit quis
              quibusdam, alias architecto!
              <span style={{ color: "black" }}>
                <button
                  style={{ border: "none", padding: "0", fontWeight: "bold" }}
                >
                  read more...
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-top" style={{ position: "relative" }}>
          <div
            className="news-content"
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            <div
              className="title"
              style={{
                position: "absolute",
                bottom: "0px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                opacity: " 0.6",
                left: "0",
                right: "0",
                fontWeight: "bold",
              }}
            >
              <h3>News title</h3>
              sit nostrum beatae animi perspiciatis, harum impedit quis
              quibusdam, alias architecto!
              <span style={{ color: "black" }}>
                <button
                  style={{ border: "none", padding: "0", fontWeight: "bold" }}
                >
                  read more...
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
