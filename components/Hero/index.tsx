"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination"
import sliderData from "./sliderData";

const Hero = () => {
  return (
    <Swiper
    className="custom-swiper"
      modules={[EffectFade, Autoplay, Pagination]}
      effect="fade"
      pagination={{
        
      }}
      fadeEffect={{ crossFade: true }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true} // Döngü aktif
      autoplay={{
        delay: 5000, // Otomatik geçiş süresi (ms cinsinden)
        disableOnInteraction: false, // Kullanıcı müdahale ettiğinde durmasın
      }}
    >
      {
        sliderData.map((item,index)=> (
          <SwiperSlide key={index} className="relative">
        <div className="relative deactive-mobile slider-image-height-md">
          <img
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            src={item.mdImg}
            alt="ataturk-park-sosyal-tesis-1.jpg"
          />
        </div>
        <div className="relative active-mobile slider-image-height-sm">
          <img
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            src={item.smImg}
            alt="ataturk-park-sosyal-tesis-1.jpg"
          />
        </div>
      </SwiperSlide>
        ))
      }
      

      {/* <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height-sm">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/005.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height-sm">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/002.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-[1000px] slider-image-height-sm">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/003.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height-sm">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/006.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Hero;
