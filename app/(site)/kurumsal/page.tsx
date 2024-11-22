import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ekdağ | Kurumsal",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
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
                <h1>Ekdağ A.Ş.</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Şirketimiz 1989 yılı itibari ile Antalya Büyükşehir
                  Belediyesi’nin bir iştiraki olarak kurulmuştur. Kuruluş amacı
                  ekmek üretim ve dağıtım olarak başladığı hizmetine Sosyal
                  Tesisler ve atölye çalışmaları ile üretim yelpazesini
                  genişleterek ilerlemeye devam ederken farklı çalışma
                  alanlarını bünyeye kazandırarak yeni projeler üretmeye devam
                  etmektedir. Şirketimizin faaliyet alanları her tür menkul ve
                  gayrimenkullerini işletmek-kiralamak-kiraya vermek, fabrikalar
                  kurmak ve konusu ile ilgili Boğaçayı üretim tesisinde, her
                  türlü üretimi ve satışını yapmak Sosyal Tesis kurmak işletmek,
                  açık ve kapalı otopark işletmek
                </p>
                <img
                  width={1000}
                  height={500}
                  src="/images/image.png"
                  alt="/images/image.png"
                />

                <h2 className="text-xl">Vizyonumuz</h2>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Mal ve hizmet üretimi gerçekleştirdiğimiz tesislerimizde ham
                  madde başta olmak üzere tüm iş süreçlerimizde dışa bağımlılığı
                  en az seviyeye indirerek ülkemiz ekonomisine katkı sağlamak,
                  sürekli ve sürdürebilir tasarruf önlemlerini kesintisiz
                  uygulamak, teknolojik altyapıların gelişimini izleyerek
                  firmamız faaliyet alanlarında uygulanabilir olan yenilikleri
                  gerçekleştirmek için azami çabayı sarf etmek ve tüm
                  süreçlerimizin denetimlerinde yüksek kalite standartlarından
                  taviz vermeden şehrimizin tüm sakinlerine en iyi ürün ve
                  hizmeti sunarak vazgeçilmez olmaktır.
                </p>

                <h2 className="text-xl">Misyonumuz</h2>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Sağlıklı ve kaliteli ürün ve hizmetleri kendi alanlarında
                  yeterliliklerinden emin olduğumuz kişi ve kurumlarla çalışarak
                  şehrimizin sakinlerinin tüketimlerine sunmak ve üst düzey
                  standartlarda hizmetleri Ekdağ farkıyla yerine getirmektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}