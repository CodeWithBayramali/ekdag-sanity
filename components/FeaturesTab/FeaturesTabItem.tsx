import React from "react";
import { FeatureTab } from "@/types/index";
import { Swiper,SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { urlFor } from "@/sanity/lib/client";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {featureTab?.title}
          </h2>
          <p className="mb-5">{featureTab?.description}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
        <Swiper modules={[Autoplay,EffectFlip]} autoplay effect="flip">

          <SwiperSlide>
          <img src={urlFor(featureTab?.img1).url()} alt={urlFor(featureTab?.img1).url()} className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={urlFor(featureTab?.img2).url()} alt={urlFor(featureTab?.img2).url()} className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
         
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
