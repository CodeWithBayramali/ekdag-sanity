import React from "react";
import '@/app/globals.css'
import client, { urlFor } from "@/sanity/lib/client";
import { FacilityDetail, Slug } from "@/types";
import { PortableText } from "next-sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function getServerSideProps({ params }: { params: { slug: Slug } }) {
    console.log(params.slug)
    // Sanity'den veri çekiyoruz
    const data = await client.fetch(
      `*[_type == "homePageTesis" && slug.current == $slug][0]`,
      { slug: params.slug }
    );
    console.log(data)
    // Eğer veri bulunmazsa 404 sayfasına yönlendirme yapabilirsiniz
    if (data.length === 0) {
      return {
        notFound: true, // 404 sayfasına yönlendirir
      };
    }
  
    // Veri ile birlikte sayfa component'ini render ediyoruz
    return {
      props: {
        facilityData: data, // Veriyi props olarak gönderiyoruz
      },
    };
  }
  
  interface Props {
    facilityData: FacilityDetail;
  }
  
  const FacilityPage: React.FC<Props> = ({ facilityData }) => {
    if (!facilityData) {
      return <div>Yükleniyor...</div>;
    }
  
    return (
      <>
      <Header />
  
        <div className="max-w-c-1390 w-full mx-auto">
          <section className="pb-16 md:pb-20 lg:pb-24">
            <div className="w-full px-4">
              {/* <div className="flex w-full items-center justify-center">
                <img className="logo-sm py-12" src="/ekdag-ekmek-logo-800.png" />
              </div> */}
              <div className="blog-details mt-18 blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{facilityData.tesisName}</h1>
  
                <PortableText value={facilityData.tesisDetail} />
                <div className="flex w-full items-center justify-center my-12">
                  <img
                    className="w-96 h-96"
                    src={urlFor(facilityData.tesisDetailImage).url()}
                  />
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-6 gap-x-6">
                  {facilityData.tesisImages.map((item, index) => (
                    <img
                      key={index}
                      width={1000}
                      height={500}
                      src={urlFor(item).url()}
                      alt="/images/image.png"
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
  
  export default FacilityPage;