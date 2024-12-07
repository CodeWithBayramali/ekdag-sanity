'use client'
import RelatedPost from "@/components/Blog/RelatedPost";
import client, { urlFor } from "@/sanity/lib/client";
import { Blog } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const SingleBlogPage = () => {
  const params = useParams()
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null); // Başlangıçta null verisi

  useEffect(() => {
    if (params?.slug) {
      const getUrl = async () => {
        // slug parametresini kullanarak sorguyu düzenleyin
        const data = await client.fetch(
          `*[_type == "blog" && slug.current == $slug][0]`,
          { slug: params.slug } // slug parametresini burada sağlıyoruz
        );
        setSingleBlog(data);
      };
      getUrl();
    }
  }, [params?.slug]); // Yalnızca params.slug değiştiğinde çalışacak

  // Eğer blog verisi gelmediyse, yükleniyor durumu gösterin
  if (!singleBlog) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <section className="pb-20 lg:pb-25 xl:pb-30 pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={urlFor(singleBlog.blogImage).url()}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {singleBlog.blogTitle}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                 
                  <li>
                    <span className="text-black dark:text-white">
                      Paylaşma Tarihi: {singleBlog.createdAt}
                    </span>{" "}
                  </li>
                </ul>

                <div className="blog-details">
                 <PortableText value={singleBlog.blogDescription} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
