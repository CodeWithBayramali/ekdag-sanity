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
            <h1>ATATÜRK PARKI SOSYAL TESİSİ </h1>

            <p className="text-body-color dark:text-body-color-dark text-base">
              Falezlerin omuzlarında, Akdeniz’in eşsiz manzarası ile buluşmanız
              için sizleri Antalya Büyükşehir Belediyesi EKDAĞ Atatürk Parkı
              Sosyal Tesisi’ne bekliyoruz. Atatürk’ün ‘’dünyanın en güzel
              şehri’’ olarak andığı Antalya’nın bu güzel manzarasında birlikte
              bir fincan kahve veya zengin bir kahvaltı ile güne
              başlayabilirsiniz. Günün ilerleyen saatlerinde ise, tesisimizin
              damak zevkinize uygun tertemiz ve lezzetli yemeklerini
              deneyimleyebilirsiniz. Gün batımını bu benzersiz manzarada
              izlerken, güneşin altın rengine bürünen denizi seyre dalabilir ve
              sıcacık bir çay eşliğinde içinizi ısıtabilirsiniz. Bu huzur dolu
              anların tadını çıkarırken, sevdiklerinizle birlikte unutulmaz
              anılar biriktirebilirsiniz. Antalya’nın en güzel köşesinde,
              doğanın ve denizin kucaklaştığı bu özel mekanda birbirinden
              lezzetli yemekler ve geniş içecek yelpazemiz ile siz değerli
              misafirlerimizi ağırlamaktan büyük mutluluk duyuyoruz. Antalya’nın
              en güzeline, bu eşsiz deneyime davetlisiniz.
            </p>
            <div className="flex w-full items-center justify-center my-12">
                <img className="w-[600px] h-[600px]" src="/images/ataturk-park/image.png" />
            </div>
            <div className="grid grid-cols-3 gap-x-6">
            <img
              width={1000}
              height={500}
              src="/images/ataturk-park/ataturk-park-sosyal-tesis-1.jpg"
              alt="/images/image.png"
            />
            <img
              width={1000}
              height={500}
              src="/images/ataturk-park/ataturk-park-sosyal-tesis-2.jpg"
              alt="/images/image.png"
            />
            <img
              width={1000}
              height={500}
              src="/images/ataturk-park/ataturk-park-sosyal-tesis-4.jpg"
              alt="/images/image.png"
            />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
