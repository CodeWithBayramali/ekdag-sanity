import React from "react";
import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kurumsal | Kiralamalar",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function page() {
  return (
    <>
    <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/slider/slider-md-1.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/slider/halkslider1.png" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>EKDAĞ A.Ş KİRALAMA BİLGİ PORTFÖYÜ</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  EKDAĞ A.Ş. halkın ortak ihtiyaçlarına yönelik hizmet sunmak ve
                  hizmet verdiği halkın ihtiyaçlarına en ileri seviyede cevap
                  verebilmektedir.Antalya Büyükşehir Belediyesi’nin bazı
                  işletmeleri, Büyükşehir Belediye Meclisi tarafından EKDAĞ
                  A.Ş.’ye kiraya verilmiştir.
                </p>
                <p>
                  - Atatürk Kültür Merkezi Parkı içerisinde bulunan 7 adet işletme ve 1 adet otopark.
                </p>

                <p>
                  - Üçgen mahallesi 1010 ada 1 parsel doğusunda 1 adet otopark ve oto yıkama.
                </p>
                <p>
                  - Toptancı halinde bulunan 2 adet kantar işletmesi.
                </p>
                <p>
                  - Selçuk Mahallesi 157 ada 13 parselde bulunan 768,80m²’lik çay bahçesi.
                </p>
                <p>
                  - Bahtılı mahallesi hobi bahçesi içerisinde bulunan 1 adet halı saha 1 adet olimpik havuz ve 1 adet çay bahçesi
                </p>
                <p>
                  - Manavgat ilçesinde bulunan 2 adet üst geçit altı büfe kiraya verilmiştir ve yapay şelale yanında bulunan 1 adet boş büfe.
                </p>
                <p>
                  - Manavgat ilçesi Türkbeleni Kent Ormanı içinde büfe, kır lokantası, kır kahvesi, ve survivor alanı.
                </p>
                <p>
                  - Lara birlik ünitesi içerisinde bulunan 6 adet büfe.
                </p>
                <p>
                  - Düden park içerisinde bulunan; 4 adet çay bahçesi, 2 adet büfe çay evi ve 2 adet otopark.
                </p>
                <p>
                  - 163 Adet simit tezgahı Antalya’nın muhtelif yerlerinde yer almaktadır.
                </p>
                <p>
                  - 3891 ada 14 parselde bulunan 1 adet ekmek fabrikası.
                </p>
                <p>
                  - 30 Adet Antalya ili içi üst geçit altı büfe.
                </p>
                <p>
                  - 120 Adet Antalya ili içi Halk Ekmek büfesi.
                </p>
                <p>
                  - Manavgat ilçesinde 6 adet halk ekmek büfesi.
                </p>
                <p>
                  - Antalya ili içi şehrin muhtelif yerlerinde10 Adet ahşap büfe.
                </p>
                <p>
                  - İsmet İnönü Kent Yaşam Alanı Projesi kapsamında 1 adet çay bahçesi.
                </p>
                <p>
                  - 1 Adet Düden Park içi fotoğraf standı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
