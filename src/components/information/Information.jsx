import React from "react";
import "./info.scss";
import cascading from "../../assets/background_sheet.png";
import { GiHotSpices } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import shape from "../../assets/shape.png";
import { useTranslation } from "react-i18next";
const Information = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="information_page">
      <div className="background_sheet">
        <img src={cascading} alt="" className="back_img" />
      </div>

      <div className="information_page_right container">
        <div className="info_advert">
          <div className="adv_info_cont">
            <h1>
              {t("second_page.main_text")}
              <div className="shape_blur_img">
                <img src={shape} alt="" />
              </div>
            </h1>
            <div className="info_text">
              <p>
                <span className="info_text_icon">
                  <BsArrowRight />
                </span>
                {t("second_page.desc")}
              </p>
            </div>
            <div className="adv_info_btns">
              <button className="button">
                <span className="icon">
                  <ion-icon name="flame-outline"></ion-icon>
                </span>
                {t("second_page.btn_1")}
              </button>
              <button className="button">
                <span className="icon">
                  <ion-icon name="hourglass-outline"></ion-icon>
                </span>
                {t("second_page.btn_2")}
              </button>
              <button className="button">
                <span className="icon">
                  <GiHotSpices />
                </span>
                {t("second_page.btn_3")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
