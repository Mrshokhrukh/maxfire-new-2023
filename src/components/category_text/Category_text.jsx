import React from "react";
import "./categoryText.scss";
const Category_text = ({ text }) => {
  return (
    <div className="categ_text">
      <div className="rotated_text_btn">
        <span>{text}</span>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Category_text;
