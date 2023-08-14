import React from "react";
import "./products.scss";
import komir from "../../assets/background_komir.png";
import Category_text from "../category_text/Category_text";
import { useTranslation } from "react-i18next";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { products } from "../../assets/data";

const Products = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="products_page">
      <div className="background_img">
        <img src={komir} alt="" />
      </div>

      <div className="products_page_container">
        <div className="cattegroy_text_products_page container">
          <Category_text text={`${t("fives_page.main_text")}`} />
        </div>

        <div className="swiper-container">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: false,
              },
              901: {
                slidesPerView: 2.0,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.0,
                spaceBetween: 25,
              },
              1201: {
                slidesPerView: 3.0,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 3.2,
              },
              1440: {
                slidesPerView: 3.6,
                spaceBetween: 40,
              },
              1540: {
                slidesPerView: 4.0,
                spaceBetween: 40,
              },
              1600: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            slidesPerView={4.3}
            centeredSlides={false}
            spaceBetween={50}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {products?.map((card, i) => {
              return (
                <SwiperSlide key={i} className="carousel-slide">
                  <div className="card">
                    <img src={card.img} alt="" id="img" />
                    <div className="product_info">
                      <div className="product_name">
                        <h2>{card.name}</h2>
                        <h2>{card.weight}</h2>
                      </div>
                      <div className="full_info">
                        <div className="p_i_left">
                          <p>{t("fives_page.product_info_1")}:</p>
                          <p>{t("fives_page.product_info_2")}:</p>
                          <p>{t("fives_page.product_info_3")}:</p>
                          <p>{t("fives_page.product_info_4")}:</p>
                        </div>
                        <div className="p_i_right">
                          <p>{card.location}</p>
                          <p>{card.time}</p>
                          <p>{card.min_order}</p>
                          <p>{card.used_for}</p>
                        </div>
                      </div>
                      <button
                        className="price_btn"
                        onClick={() => (window.location.href = "#contact")}
                      >
                        {t("fives_page.buy_text")}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
