import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
       <div className="flex justify-center relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/slider/007.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="w-full px-4">
            <div className="flex w-full items-center justify-center">
                <img src="/ekdag-gozde-logo.jpg" />
            </div>
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>DÜDEN PARK BALIK ÇARŞISI SOSYAL TESİSİ</h1>

            <p className="text-body-color dark:text-body-color-dark text-base">
              Türkiye{`'`} nin en güzel sahil kenti Antalya{`'`} nın gözdesi EKDAĞ A.Ş.
              Balık Çarşısı, 2017 yılında Akdeniz ve Toroslar manzaralı Lara
              Düden Park{`'`} ı içerisinde falezlerin üzerinde hizmete açılmıştır.
              Ekdağ Sosyal Tesisi Düden Park Balık Çarşısı, Antalya’nın en
              kaliteli ve uygun fiyatlı Sosyal tesisini Antalya’ya kazandırmış
              olmaktan gurur duymaktayız. Antalya{`'`} nın önemli bir balık çarşısı
              eksiğini ortadan kaldırmıştır. Ekdağ A.Ş olarak çalışanlarımız ve
              müşterilerimizin sağlığı ve güvenliği önceliğimizdir. İlk günden
              itibaren Covid-19 sürecinde üst seviyede önlemler alarak, Sağlık
              Bakanlığı{`'`} nın belirlediği kurallar ve Dünya Sağlık Örgütü{`'`} nün
              yaptığı uyarılar çerçevesinde Sosyal Tesislerimiz alkol ve paraben
              içermeyen kokusuz, hava ve zeminde etkili insan sağlığına zararı
              olmayacak şekilde dezenfekte edilmektedir. Geniş ferah oturma
              alanıyla fark oluşturan konsepti, sağlıklı ve modern koşullarda
              sağladığı hizmet kalitesiyle her kesimin ortak buluşma noktası
              olmaktadır.
            </p>
            <p>
              Seçtiğiniz taze ve sağlıklı deniz ürünlerini ızgara veya yağda
              pişirme seçeneklerine göre sunmaktadır, ara sıcak olarak kalamar
              karides midye tava ürünlerimiz başlangıç olarak nefis sarımsaklı
              ekmek, mezelerimiz ve salata çeşitlerimiz değerli misafirlerimize
              özenle hazırlanmaktadır. Balığın servise hazırlanmasını beklerken
              meze ve salata ikramları yapılmaktadır. Taptaze balık
              mahsullerimiz dışında Düden Balık Çarşısı Sosyal Tesisimizde, aynı
              zamanda balık tercih etmeyen misafirlerimiz için et, tavuk ve
              burger ürünlerimiz bulunmaktadır.
            </p>
            <div className="flex w-full items-center justify-center my-12">
                <img className="w-[800px] md:h-[600px] sm:h-[400px]" src="/images/duden-park/image.png" />
            </div>
            <div className="grid grid-cols-3 gap-x-6">
              <img
                width={1000}
                height={500}
                src="/images/duden-park/ekdag-duden-balik-carsisi-52.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/duden-park/ekdag-duden-balik-carsisi-53.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/duden-park/ekdag-duden-balik-carsisi-60.jpg"
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
