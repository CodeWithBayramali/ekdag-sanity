import React from "react";
import { FeatureTab } from "@/types/index";
import Image from "next/image";
import { Swiper,SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image,image2 } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
        <Swiper modules={[Autoplay,EffectFlip]} autoplay effect="flip">

          <SwiperSlide>
          <img src={image} alt={title} className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={image2} alt={title} className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
         
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
