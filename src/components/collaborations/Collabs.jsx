import React from "react";
import "./collabs.scss";
import grImg from "../../assets/free-icon-guarantee-3832075.png";
import lorryImg from "../../assets/free-icon-lorry-605863.png";
import delImg from "../../assets/free-icon-possibility-5430059.png";
import shape from "../../assets/shape.png";
import back from "../../assets/background_komir.png";
import { useTranslation } from "react-i18next";

const Collabs = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="page_8_choose_us">
      <div className="background_img">
        <img src={back} alt="" className="chooseUs_neBack" />
      </div>
      <div
        className="our_priorities_page container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="our_priorities_page_text">
          <div className="back_red_circle">
            <img src={shape} alt="" />
          </div>
          <p>{t("eight_page.main_text")}</p>
        </div>

        <div className="eighth_page_info_boxes">
          <div
            className="box_guarent"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="img_round">
              <img src={grImg} alt="" />
            </div>
            <div className="title_text">
              <p>{t("eight_page.title_1")}</p>
            </div>
            <div className="title_description">
              <p>{t("eight_page.info_1")}</p>
            </div>
          </div>
          <div
            className="box_lorry"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="img_round">
              <img src={lorryImg} alt="" />
            </div>
            <div className="title_text">
              <p>{t("eight_page.title_2")}</p>
            </div>
            <div className="title_description">
              <p>{t("eight_page.info_2")}</p>
            </div>
          </div>
          <div
            className="box_possibilities"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="img_round">
              <img src={delImg} alt="" />
            </div>

            <div className="title_text">
              <p> {t("eight_page.title_3")}</p>
            </div>
            <div className="title_description">
              <p>{t("eight_page.info_3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabs;
