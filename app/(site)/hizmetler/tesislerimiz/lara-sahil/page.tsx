import React from "react";

export default function page() {
  return (
    <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="w-full px-4">
          <div className="flex w-full items-center justify-center">
            <img src="/ekdag-gozde-logo.jpg" />
          </div>
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>LARA SAHİL PLAJI SOSYAL TESİSİ</h1>

            <p className="text-body-color dark:text-body-color-dark text-base">
              Ekdağ A.Ş olarak misafirlerimize kaliteli, huzurlu ve uygun
              fiyatlı tatil imkanı sağlamak için 2015 yılının yaz sezonuna 800
              kişilik şezlong alanı,bay bayan mescit, bebek emzirme odası, 200
              kişilik restorant alanı ile kapılarını tüm misafirlerine açmıştır.
              Ekdağ A.Ş Lara Sahili Sosyal Tesisi, Antalya Lara Birlik Plajı
              içerisinde yer almaktadır.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Deniz manzarası eşliğinde güne zinde başlamak için taze meyve
              suyu, bol çeşitli kahvaltı tabaklarıyla çay ya da özel kahveler
              eşliğinde tost , menemen ve omlet çeşitleri sunmaktadır.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Gün içerisinde keyifli sohbetlerinizin yanında Atıştırmalıklar,
              taze Salatalar keyifli ve eğlencelipizzalar, sandviçler,
              burgerler, makarna tabakları ve et çeşitlerimiz ile siz değerli
              misafirlerimiziplajımızda ağırlarken ilk günden itibaren Covid-19
              virüsü ile ilgili en üst seviyede önlemleralarak, Sağlık
              Bakanlığı{`'`} nın belirlediği kurallar çerçevesinde Sosyal Tesisimizde
              gerekli hijyenve uygulama bildirimlerini gerçekleştirdik.
            </p>
            <div className="flex items-center justify-center">
            <img
                className="w-[200px] h-[200px]"
                src="/images/lara-plaj/image.png"
              />
            </div>
            <div className="flex w-full items-center justify-center my-12">
              <img
                src="/images/lara-plaj/laraimage.png"
              />
            </div>
            <div className="grid grid-cols-3 gap-x-6">
              <img
                width={1000}
                height={500}
                src="/images/lara-plaj/ekdag_lara_plaji_53.jpg"
                alt="/images/image.png"
              />
             <img
                width={1000}
                height={500}
                src="/images/lara-plaj/ekdag_lara_plaji_55.jpg"
                alt="/images/image.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
