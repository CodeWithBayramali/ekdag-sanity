import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
        <Image src="/images/slider/slider-md-1.webp" className="brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
        <Image src="/images/slider/halkslider1.png" className="brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="w-full px-4">
        <div className="flex w-full items-center justify-center">
                <img className="logo-sm py-12" src="/ekdag-ekmek-logo-800.png" />
            </div>
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>BÜYÜKŞEHİR BELEDİYESİ KAFETERYA</h1>

            <p className="text-body-color dark:text-body-color-dark text-base">
              Antalya Büyükşehir Belediyesi 4. katında bulunan Kafeteryamız, 250
              kişilik oturma alanıyla kalite ve hijyen koşullarının üst seviyede
              tutulduğu çalışma ortamına sahip Sosyal Tesis, yemekhane, alakart
              restoran ve kafeterya olarak halkımıza ve Antalya Büyükşehir
              Belediyesi çalışanlarına hizmet vermektedir.
            </p>
            <p>
              Teknolojik alt yapısıyla tam donanımlı mutfak ekipmanlarıyla
              diyetisyen denetiminden geçen sağlıklı besinlerin üretildiği
              günlük menülerin uygun fiyata sunulduğu, lüks restoranları
              aratmayan hizmet kalitesiyle ve anlayışıyla çalışmaktadır.
            </p>
            <div className="flex w-full items-center justify-center my-12">
              <img
                className="w-[800px] md:h-[600px] sm:h-[400px]"
                src="/images/buyuksehir-kafeterya/image.jpg"
              />
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 flex-wrap gap-y-6 gap-x-6">
              <img
                width={1000}
                height={500}
                src="/images/buyuksehir-kafeterya/kafeterya-1.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/buyuksehir-kafeterya/kafeterya-2.jpg"
                alt="/images/image.png"
              />
               <img
                width={1000}
                height={500}
                src="/images/buyuksehir-kafeterya/kafeterya-3.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/buyuksehir-kafeterya/kafeterya-4.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/buyuksehir-kafeterya/kafeterya-5.jpg"
                alt="/images/image.png"
              />
               <img
                width={1000}
                height={500}
                src="/images/buyuksehir-kafeterya/kafeterya-6.jpg"
                alt="/images/image.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
    
  );
}
