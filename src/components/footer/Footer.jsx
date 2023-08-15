import React, { useRef } from "react";
import "./footer.scss";

import { CiYoutube } from "react-icons/ci";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone icon.png";
import ins from "../../assets/instagram.png";
import tg from "../../assets/telegram.png";
import ytb from "../../assets/youtube.com.png";
import { PiCopyright } from "react-icons/pi";
import { useTranslation } from "react-i18next";

import emailjs from "@emailjs/browser";
const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkb6iyq",
        "template_67hzzta",
        form.current,
        "5rwDYvpoMmtU40hTE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer" id="contact">
      <div className="footer_form" id="contact">
        <div className="address_footer container">
          <div className="address_info">
            <p className="address_info_title">{t("footer.loc")}</p>
            <div className="infos">
              <span>{t("footer.city")},</span>
              <span>{t("footer.target")},</span>
              <span>{t("footer.home")}</span>
            </div>
            <div className="work_time">
              <p>{t("footer.work_time")}</p>
            </div>
          </div>

          <div className="form_space">
            <form ref={form} onSubmit={sendEmail}>
              <div className="formDiv one">
                <label htmlFor="name">{t("footer.form_name")}:</label>
                <input type="text" name="user_name" />
              </div>
              <div className="formDiv two">
                <label htmlFor="phone">{t("footer.form_email")}:</label>
                <input type="text" name="user_number" />
              </div>
              <button className="form_btn">{t("footer.record")}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="phone_social_footer container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="phoneNumber">
          <a href="tel:+998 97 775 75 01" className="tell">
            <div className="phone_icon">
              <img src={phone} alt="" />
            </div>

            <div className="number">
              <span>{t("footer.call")}:</span>
              <p>+998 97 775 75 01</p>
            </div>
          </a>
        </div>
        <div className="socialMedia">
          <p>{t("footer.media_text")}</p>
          <div className="social_icons">
            <div className="social_icon">
              <a
                href="https://instagram.com/maxfire.uz?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <img src={ins} alt="" />
              </a>
            </div>
            <div className="social_icon">
              <a href="https://t.me/maxfireuz" target="_blank">
                <img src={tg} alt="" />
              </a>
            </div>
            <div className="social_icon">
              <a
                href="https://www.youtube.com/channel/UCRIsBKCeGp4We6AXktB5ISQ"
                target="_blank"
              >
                <CiYoutube className="footer_youtube_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="our_company_maba">
        <p>
          Copyright{" "}
          <span className="copyright_icon">
            <PiCopyright />
          </span>
          2023{" "}
          <a href="#" target="_blank">
            <span className="company_name">Maba Agency</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
