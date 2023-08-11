import React from "react";
import "./about.scss";
import backimg from "../../assets/background.png";
import Category_text from "../category_text/Category_text";
import yu from "../../assets/youtube.com.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="about_page">
      <div className="background_img">
        <img src={backimg} alt="" />
      </div>
      <div className="about_page_el container">
        <Category_text text={`${t("third_page.about_text")}`} />

        <div className="about_text">
          <p>{t("third_page.desc")}</p>
        </div>

        <div className="about_youtube_video">
          <div className="youtube_icon">
            <a href="https://youtu.be/0UKTXivgZ0U" target="_blank">
              <img src={yu} alt="404" />
            </a>
          </div>
          <img
            src="https://www.grillsportverein.de/upload_neu/2015/ani-03.gif"
            alt=""
            className="fire_grill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
