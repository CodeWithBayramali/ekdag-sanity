"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import CardItem from "../CardItem";
import Image from "next/image";
import client from "@/sanity/lib/client";
import HomeTesisCardItem from "../HomeTesisCardItem";


const Feature = () => {

  const [homeTesisData,setHomeTesisData] = useState([])

  useEffect(()=> {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "homePageTesis"]{
          slug,
          tesisName,
          tesisCardImage
        }`);
        setHomeTesisData(data);
    };
    getUrl();
  },[])

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-10 lg:py-10 bg-gray-100 xl:py-10"
        style={{
          background: "url(/images/ekdag-konsept-bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="flex w-full items-center justify-center">
              <Image src="/ekdag-ekmek-logo-800.png" width={150} height={150} alt="ekdag-logo-800.png" />
            </div>
            <SectionHeader headerInfo={{
              title: '',
              subtitle: 'Ekdağ Tesislerini Keşfedin',
              description: `Zengin ürün içerikleri ve her ihtiyaca uygun konseptleriyle Ekdağ, Antalya'nın dört bir köşesinde sizinle!`
            }} />
            
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-4 lg:mt-15 lg:grid-cols-4 xl:mt-20 xl:gap-6">
            {/* <!-- Features item Start --> */}
            <HomeTesisCardItem />
            {homeTesisData.map((feature, key) => (
              <CardItem feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
