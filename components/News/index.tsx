'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import sliderData from '@/public/data/sliderData.json'
import SectionHeader from '../Common/SectionHeader'
import Link from 'next/link'
import client, { urlFor } from '@/sanity/lib/client'
import { NewsCard } from '@/types'

export default function News() {

  const [newsData,setNewsData] = useState<NewsCard[]>([])

  useEffect(()=> {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "news"]{
          _id,
          newsTitle,
          subDesc,
          newsImage
        }`);
        setNewsData(data);
    };
    getUrl();
  },[])

  return (
    <div className='bg-gray-50'>
    <div className="animate_top pt-12 mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `HABERLER & BÜLTEN`,
              subtitle: `En yeni gelişmeler`,
              description: ``,
            }}
          />
        </div>
    
    <Swiper autoplay modules={[Autoplay]}>
      { newsData.map((item, index) => (
        <SwiperSlide key={index}>
          <section className="overflow-hidden pb-20 mt-12 xl:pb-25">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
                <div className=" md:w-1/2">
                  <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                    {item.newsTitle} {"   "}
                  </h1>
                  <p className="mb-6">
                    {item.subDesc}
                  </p>
                  <Link href='/' className='border rounded-full py-1.5 px-4 transition-all hover:bg-black hover:text-white'>Detay</Link>
                </div>

                <div className="animate_right hidden md:w-1/2 lg:block">
                  <div className="relative 2xl:-mr-7.5">
                    
                    <div className=" relative aspect-[700/444] w-full">
                      <Image
                        className="shadow-solid-l dark:hidden rounded-lg"
                        src={urlFor(item.newsImage).url()}
                        alt="Hero"
                        fill
                      />
                      <Image
                        className="hidden shadow-solid-l dark:block rounded-lg"
                        src="/images/ataturkpark.jpg"
                        alt="Hero"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
  )
}
