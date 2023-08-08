import React, { useState } from "react";
import backimg from "../../assets/1 page+picture.png";
import medal from "../../assets/medal.png";
import "./mainPage.scss";
import { useTranslation } from "react-i18next";
const MainPage = () => {
  const [t, i18n] = useTranslation("global");
  const [isSmall, SetIsSmall] = useState(false);
  return (
    <div className="main_page">
      <div className="background_img">
        <img src={backimg} alt="" />
      </div>
      <div className="homepage_elements">
        <div>
          <h1 className="text">
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
    </div>
  );
};

export default MainPage;
