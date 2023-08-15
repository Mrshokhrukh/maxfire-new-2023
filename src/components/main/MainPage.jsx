import React, { useState, useEffect } from "react";
import backimg from "../../assets/1 page+picture.png";
import medal from "../../assets/medal.png";
import resHome from "../../assets/home_page_back_res.png";
import { BsArrowDown } from "react-icons/bs";
import "./mainPage.scss";
import { useTranslation } from "react-i18next";
import Circle from "../Circle/Circle";
const MainPage = () => {
  const [t, i18n] = useTranslation("global");
  const [isSmall, SetIsSmall] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      SetIsSmall(true);
    } else {
      SetIsSmall(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        SetIsSmall(true);
      } else {
        SetIsSmall(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main_page" id="home">
      <div className="background_img">
        <img src={isSmall ? resHome : backimg} alt="" />
      </div>
      <div className="homepage_elements container">
        <div>
          <h1 className="homepage_elements_text">
            <span>{t("home_page_text.main_text")}</span> <br />
            {t("home_page_text.main_text_br")}
          </h1>
          <div className="sub_text">
            <p>{t("home_page_text.btn_text")}</p>
          </div>
        </div>
        <div className="experience_text">
          <img src={medal} alt="" className="medal_img" width={100} />
          <p>{t("home_page_text.age_medal")}</p>
        </div>
      </div>

      <Circle icon={<BsArrowDown />} />
    </div>
  );
};

export default MainPage;
