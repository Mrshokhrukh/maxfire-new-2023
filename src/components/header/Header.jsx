import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import i18next from "i18next";

const Header = () => {
  const [t, i18] = useTranslation("global");

  let header = useRef(null);
  let nav_link = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 770 && window.scrollY > 50) {
        header.current.style.top = "0";
        header.current.style.boxShadow =
          "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;";
      } else if (window.innerWidth < 768 && window.scrollY > 20) {
        header.current.style.top = "0";
      }
    };

    window.addEventListener("scroll", onResize);

    return () => {
      window.removeEventListener("scroll", onResize);
    };
  }, []);
  const close = (para) => {
    setIsOpen(para);
  };
  if (isOpen) {
    document.querySelector(".home").addEventListener("click", () => {
      setIsOpen(false);
    });
  }

  return (
    <div className="head" ref={header}>
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

        <div className="burger_menubar_opener">
          <ul className="burger_menu">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
