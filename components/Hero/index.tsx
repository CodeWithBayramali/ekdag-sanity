"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <Swiper autoplay modules={[Autoplay]} className="mt-[78px]">
      <SwiperSlide className="relative w-full aspect-[14/5]">
        <Image
          fill
          className=" brightness-90"
          style={{ objectFit: "fill" }}
          src="/images/slider/004.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
      </SwiperSlide>

      <SwiperSlide className="relative w-full aspect-[14/5]">
        <Image
          fill
          className=" brightness-90"
          style={{ objectFit: "fill" }}
          src="/images/slider/005.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
      </SwiperSlide>

      <SwiperSlide className="relative w-full aspect-[14/5]">
        <Image
          fill
          className=" brightness-90"
          style={{ objectFit: "fill" }}
          src="/images/slider/002.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
      </SwiperSlide>

      <SwiperSlide className="relative w-full aspect-[14/5]">
        <Image
          fill
          className=" brightness-90"
          style={{ objectFit: "fill" }}
          src="/images/slider/003.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
      </SwiperSlide>

      <SwiperSlide className="relative w-full aspect-[14/5]">
        <Image
          fill
          className=" brightness-90"
          style={{ objectFit: "fill" }}
          src="/images/slider/006.webp"
          alt="ataturk-park-sosyal-tesis-1.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
