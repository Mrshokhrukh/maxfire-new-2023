import React from "react";
import "./circle.scss";

const Circle = ({ icon }) => {
  return (
    <div
      className="to_bottom_circled"
      onClick={() => (window.location.href = "#contact")}
    >
      <div className="to_bottom_icon">{icon}</div>
      <div className="cirled_dots">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
    </div>
  );
};

export default Circle;
