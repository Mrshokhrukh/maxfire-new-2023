import React from "react";
import "./starter.scss";
import starter_img from "../../assets/wr_back.png";
import blured from "../../assets/shape.png";
import { useTranslation } from "react-i18next";
import right from "../../assets/down-arrow.png";
const Starter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="starter_page">
      <div className="background_img">
        <img src={starter_img} alt="" />
      </div>
      <div className="info_starter_page container">
        <div
          className="desc_infogram"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="infogram_back_blur_img">
            <img src={blured} alt="" />
          </div>
          <h1>
            <span className="starter_text">
              {t("fourth_page.starter_text")}{" "}
            </span>{" "}
            - {t("fourth_page.after_starter_text")}
          </h1>
          <div className="infogram_text">
            <p>
              <img src={right} alt="" className="right_arrow_img" />{" "}
              {t("fourth_page.text_1")}
            </p>
            <p>
              <img src={right} alt="" className="right_arrow_img" />{" "}
              {t("fourth_page.text_2")}
            </p>
            <p>
              <img src={right} alt="" className="right_arrow_img" />{" "}
              {t("fourth_page.text_3")}
            </p>
            <p>
              <img src={right} alt="" className="right_arrow_img" />{" "}
              {t("fourth_page.text_4")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
