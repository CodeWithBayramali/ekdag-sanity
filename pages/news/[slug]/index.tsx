import React from "react";
import '@/app/globals.css';
import client, { urlFor } from "@/sanity/lib/client";
import { NewsDetail } from "@/types";
import { PortableText } from "next-sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  // Sanity'den veri çekiyoruz
  const data = await client.fetch(
    `*[_type == "news" && slug.current == $slug][0]`,
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
      newsData: data
    },
  };
}

interface Props {
  newsData: NewsDetail;
}

const TesisPage: React.FC<Props> = ({ newsData }) => {
  // Eğer facilityData yüklenmiyorsa bir yüklenme durumu göster
  if (!newsData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <>
      <Header />

      <>
      <section className="pb-20 lg:pb-25 xl:pb-30 pt-30" >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={urlFor(newsData.newsImage).url()}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {newsData.newsTitle}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                 
                  <li>
                    <span className="text-black dark:text-white">
                      Paylaşma Tarihi: {newsData.createdAt}
                    </span>{" "}
                  </li>
                </ul>

                <div className="blog-details">
                 <PortableText value={newsData.newsDescription} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

      <Footer />
    </>
  );
};

export default TesisPage;