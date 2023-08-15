import React from "react";
import { useTranslation } from "react-i18next";
import Category_text from "../category_text/Category_text";
import "./clients.scss";
import svet from "../../assets/svetofor logo.png";
import mar from "../../assets/marinno logo.png";
import shash from "../../assets/shashlik marinad logo.png";
import mac from "../../assets/makro logo.png";
import saf from "../../assets/safia logo.png";
import emin from "../../assets/emin.png";
import carr from "../../assets/carrefour logo.png";
import gosh from "../../assets/gosht logo.png";
import kar from "../../assets/korzinka log.png";
import makon from "../../assets/makon logo.png";
const Clients = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="clientPage container">
        <Category_text text={`${t("night_page.main_text")}`} />

        <div
          className="about_cmpanies"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="text_about_clients">
            <p>{t("night_page.info")}</p>
          </div>

          <div className="companies_collabs">
            <a href="https://www.instagram.com/korzinkauz/" target="_blank">
              <img src={kar} alt="" />
            </a>
            <a
              href="https://www.instagram.com/makro_supermarket/"
              target="_blank"
            >
              <img src={mac} alt="" />
            </a>

            <a
              href="https://www.instagram.com/marinno_shashlik_market/"
              target="_blank"
            >
              <img src={mar} alt="" />
            </a>
            <a
              href="https://www.instagram.com/shashlik_marinad.uz/"
              target="_blank"
            >
              <img src={shash} alt="" />
            </a>
            <a
              href="https://www.instagram.com/carrefouruzbekistan/"
              target="_blank"
            >
              <img src={carr} alt="" />
            </a>

            <a href="https://www.instagram.com/gosht.uz/" target="_blank">
              <img src={gosh} alt="" />
            </a>

            <a href="https://www.instagram.com/safia_uz/" target="_blank">
              <img src={saf} alt="" />
            </a>

            <a
              href="https://www.instagram.com/svetofor_taraz_alfarabi/"
              target="_blank"
            >
              <img src={svet} alt="" />
            </a>

            <a href="https://www.instagram.com/emin.marinad/" target="_blank">
              <img src={emin} alt="" />
            </a>
            <a
              href="https://www.instagram.com/makon_supermarket/"
              target="_blank"
            >
              <img src={makon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
