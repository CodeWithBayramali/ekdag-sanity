"use client";

import React from "react";
import FacilityCard from "@/components/Facility/FacilityCard";
import facilityData from "@/components/Facility/facilityData";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="flex justify-center relative w-full md:aspect-[16/5]">
        <Image src="/images/slider/006.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <div className="mx-auto max-w-c-1315">
        <div className="flex w-full justify-center mt-12">
          <Image
            src="/ekdag-gozde-logo.jpg"
            width={200}
            height={200}
            alt="ekdag-gozde-logo.jpg"
          />
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-7.5 mt-32">
          {facilityData.map((item, index) => (
            <FacilityCard key={index} facility={item} />
          ))}
        </div>
      </div>
    </>
  );
}
