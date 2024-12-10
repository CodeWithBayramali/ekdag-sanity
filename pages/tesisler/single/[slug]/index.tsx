import React from "react";
import '@/app/globals.css';
import client, { urlFor } from "@/sanity/lib/client";
import { TesisDetailData } from "@/types";
import { PortableText } from "next-sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  // Sanity'den veri çekiyoruz
  const data = await client.fetch(
    `*[_type == "tesisler" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  // Eğer veri bulunmazsa 404 sayfasına yönlendiriyoruz
  if (!data) {
    return {
      notFound: true, // 404 sayfasına yönlendirir
    };
  }

  // Boş veya undefined değerleri güvenli bir şekilde işleme
  return {
    props: {
      facilityData: data
    },
  };
}

interface Props {
  facilityData: TesisDetailData;
}

const TesisPage: React.FC<Props> = ({ facilityData }) => {
  // Eğer facilityData yüklenmiyorsa bir yüklenme durumu göster
  if (!facilityData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <>
      <Header />

      <div className="max-w-c-1390 w-full mx-auto">
        <section className="pb-16 md:pb-20 lg:pb-24">
          <div className="w-full px-4">
            <div className="blog-details mt-18 blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              {/* Tesis İsmi */}
              <h1>{facilityData?.tesisName}</h1>

              {/* Tesis Detayları */}
              {facilityData?.details ? (
                <PortableText value={facilityData.details} />
              ) : (
                <p>Tesis detay bilgisi mevcut değil.</p>
              )}

              {/* Ana Görsel */}
              <div className="flex w-full items-center justify-center my-12">
               {
                facilityData.detailImage ? (
                  <img
                  className="w-96 h-96"
                  src={urlFor(facilityData?.detailImage).url()}
                  alt="AnaGorsel.png"
                />
                ):(null)
               }
              </div>

              {/* Tesis Fotoğrafları */}
              <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-6 gap-x-6">
                {
                  facilityData?.images.map((item, index) => (
                    <img
                      key={index}
                      width={1000}
                      height={500}
                      src={urlFor(item).url()}
                      alt={`Tesis Fotoğrafı ${index + 1}`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TesisPage;