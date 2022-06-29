import React from "react";
import { CustomSwiper } from "./Components.styles";
import { SwiperSlide } from "swiper/react";
import Swiper, { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const swiper = new Swiper(".swiper", {
    // Install modules
    modules: [Navigation, Pagination],
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return (
    <>
      <CustomSwiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require("../img/smac.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../img/smac2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../img/smac4.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../img/SMACpicture3.jpg")} />
        </SwiperSlide>
      </CustomSwiper>
    </>
  );
};
export default Carousel;
