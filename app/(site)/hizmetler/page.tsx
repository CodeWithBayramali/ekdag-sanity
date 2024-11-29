"use client";
import React, { useEffect, useState } from "react";
import FacilityCard from "@/components/Facility/FacilityCard";
import Image from "next/image";
import client from "@/sanity/lib/client";

export default function Page() {

  const [facilityData,setFacilityData] = useState([])

  useEffect(()=> {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "tesisler"]{
          _id,
          tesisName,
          cartImage,
          map
        }`);
      setFacilityData(data);
    };
    getUrl();
  },[])
  
  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
        <Image src="/images/slider/plaj_slider.webp" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
        <Image src="/images/slider/halkslider4.webp" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      
      <div className="mx-auto max-w-c-1315">
        <div className="flex w-full justify-center mt-12">
          <Image
            src="/ekdag-gozde-logo.jpg"
            width={150}
            height={150}
            alt="ekdag-gozde-logo.jpg"
          />
        </div>
        <div className="grid mx-4 md:grid-cols-3 sm:grid-cols-1 gap-7.5 mt-12">
          {facilityData.map((item, index) => (
            <FacilityCard key={index} facility={item} />
          ))}
        </div>
      </div>
    </>
  );
}
