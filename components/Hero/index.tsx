"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import client, { urlFor } from "@/sanity/lib/client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { HomeData } from "@/types";

const Hero = () => {
  const [images, setImages] = useState<HomeData[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "home"]{
            sliderImages,
            sliderResponsiveImages
        }
      `);
      setImages(data);
    };
    getUrl();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil cihaz genişliği
    };

    handleResize(); // İlk değer
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Masaüstü için Swiper */}
      {!isMobile && (
        <Swiper
          className="custom-swiper"
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          pagination={{
            clickable: true,
          }}
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true} // Döngü aktif
          autoplay={{
            delay: 4000, // Otomatik geçiş süresi (ms cinsinden)
            disableOnInteraction: false, // Kullanıcı müdahale ettiğinde durmasın
          }}
        >
          {images[0]?.sliderImages?.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative deactive-mobile slider-image-height-md">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={urlFor(item).url()}
                  alt={item.asset._ref}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Mobil için Swiper */}
      {isMobile && (
        <Swiper
          className="custom-swiper"
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          pagination={{
            clickable: true,
          }}
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true} // Döngü aktif
          autoplay={{
            delay: 4000, // Otomatik geçiş süresi (ms cinsinden)
            disableOnInteraction: false, // Kullanıcı müdahale ettiğinde durmasın
          }}
        >
          {images[0]?.sliderResponsiveImages?.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative active-mobile slider-image-height-sm">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={urlFor(item).url()}
                  alt={item.asset._ref}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Hero;