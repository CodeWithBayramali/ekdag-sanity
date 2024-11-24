"use client";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <Swiper
    className="custom-swiper"
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true} // Döngü aktif
      autoplay={{
        delay: 5000, // Otomatik geçiş süresi (ms cinsinden)
        disableOnInteraction: false, // Kullanıcı müdahale ettiğinde durmasın
      }}
    >
      <SwiperSlide className="relative ">
        <div className="relative w-full slider-image-height md:h-[680px] aspect-[16/9]">
          <img
            className="absolute inset-0 w-full h-full object-cover brightness-50"
            src="/images/slider/004.webp"
            alt="ataturk-park-sosyal-tesis-1.jpg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height md:h-[680px] aspect-[16/9]">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/005.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height md:h-[680px] aspect-[16/9]">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/002.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height md:h-[680px] aspect-[16/9]">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/003.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
      <div className="relative w-full slider-image-height md:h-[680px] aspect-[16/9]">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/images/slider/006.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
