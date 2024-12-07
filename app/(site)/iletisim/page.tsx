import Contact from "@/components/Contact";
import SidebarContact from "@/components/SidebarContact";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ekdağ | İletişim",
  description: "Ekdağ İletisim",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
    <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/pages/iletisim_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/pages/iletisim_mob_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarContact />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h4>Merkez Ofis</h4>
                <p className="text-body-color dark:text-body-color-dark text-base">
                Meltem Mah. Dumlupınar Cad.Atatürk Kültür Merkezi İçi No: 199/1 Muratpaşa / ANTALYA - +90 242 311 06 94
                </p>

                <h4>Halk Ekmek</h4>
                <p className="text-body-color dark:text-body-color-dark text-base">
                +90 530 235 8261
                </p>
               
                <h4>Büyükşehir Belediyesi Kafeterya</h4>
                <p className="text-body-color dark:text-body-color-dark text-base">
                Yüksekalan Mahallesi Adnan Menderes Bulvarı No:20 4. Kat Kafeterya Muratpaşa / Antalya - +90 242 249 50 00 Dahili 6990
                </p>

                <h4>Atatürk Parkı Sosyal Tesisi</h4>
                <p className="text-body-color dark:text-body-color-dark text-base">
                Bahçelievler Mahallesi Konyaaltı Caddesi Atatürk Park içi No:25/10 R1 Muratpaşa / Antalya - +90 242 237 07 19 | +90 530 235 82 65
                </p>

                <h4>Düden Balık Çarşısı Sosyal Tesisi</h4>
                <p className="text-body-color dark:text-body-color-dark text-base">
                Çağlayan Mahallesi Barınaklar Bulvarı Düden Park içi No: 126/9 Muratpaşa / Antalya - +90 242 324 00 74
                </p>

                <h4>Barbaros Aile Çay Bahçesi</h4>
                <p className="text-body-color dark:text-body-color-dark text-base">
                Bahcelievler mah Hızır Reis cadesi No1/1, Konyaalti, 07050 Muratpasa/Antalya - 0530 505 58 26
                </p>
              </div>
              <Contact />
            </div>
        </div>
      </section>
    </>
  );
}
