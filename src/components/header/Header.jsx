import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

const Header = () => {
  const [t, i18] = useTranslation("global");
  return (
    <div className="head">
      <div className="header container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="elements">
          <a href="#home">{t("header_elements.el_1")}</a>
          <a href="#about">{t("header_elements.el_2")}</a>
          <a href="#products">{t("header_elements.el_3")}</a>
          <a href="#purchase">{t("header_elements.el_4")}</a>
          <a href="#contact">{t("header_elements.el_5")}</a>
        </div>

        <div className="translation">
          <div className="lang rus">RU</div>
          <div className="lang uz">UZ</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
