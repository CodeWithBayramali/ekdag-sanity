import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
        <Image src="/images/pages/konyaalti_page_3.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
        <Image src="/images/pages/konyaalti_page_2.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 pt-16 md:pb-20 md:pt-16 lg:pb-24 lg:pt-16">
        <div className="w-full px-4">
          <div className="flex w-full items-center justify-center">
            <img className="logo-sm" src="/ekdag-gozde-logo.jpg" />
          </div>
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>KONYAALTI SAHİL PLAJI SOSYAL TESİSİ</h1>

            <p className="text-body-color dark:text-body-color-dark text-base">
              EKDAĞ A.Ş olarak misafirlerimize kaliteli, huzurlu ve uygun
              fiyatlı tatil imkanı sağlamak için 400 kişilik şezlong alanı, 50
              kişilik Kafe alanı ile 16 Haziran 2018 tarihinde tamamlanan
              Konyaaltı Sahili projesinde,Antalya’mızın çehresine yeni haliyle
              değer katan Antalya Konyaaltı Sahili içerisinde yer almaktadır.
            </p>
            <p>
              2019 Mavi Bayraklı plajı olan Ekdağ A.Ş Konyaaltı Sahili Sosyal
              Tesisi tüm Mavi Bayrak sürecine uyarak doğaya çevreye ve denize
              sahip çıkmıştır. Konyaaltı sahilimizin temiz plajında konforlu bir
              tatile ev sahipliği yapmak için çalışmaktayız.
            </p>
            <div className="flex w-full items-center justify-center my-12">
              <img
                className="w-[800px] md:h-[600px] sm:h-[400px]"
                src="/images/konyaalti-plaj/image.png"
              />
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 flex-wrap gap-y-6 gap-x-6">
              <img
                width={1000}
                height={500}
                src="/images/konyaalti-plaj/ekdag-konyaalti-plaji-53.jpg"
                alt="/images/image.png"
              />
             <img
                width={1000}
                height={500}
                src="/images/konyaalti-plaj/ekdag-konyaalti-plaji-55.jpg"
                alt="/images/image.png"
              />
             <img
                width={1000}
                height={500}
                src="/images/konyaalti-plaj/ekdag-konyaalti-plaji-56.jpg"
                alt="/images/image.png"
              />
             <img
                width={1000}
                height={500}
                src="/images/konyaalti-plaj/ekdag-konyaalti-plaji-81.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/konyaalti-plaj/ekdag-konyaalti-plaji-83.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/konyaalti-plaj/ekdag-konyaalti-plaji-87.jpg"
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
