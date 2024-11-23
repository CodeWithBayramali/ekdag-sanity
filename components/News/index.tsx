'use client'
import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import sliderData from '@/public/data/sliderData.json'
import SectionHeader from '../Common/SectionHeader'

export default function News() {
  return (
    <>
    <div className="animate_top mt-12 mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `HABERLER & BÜLTEN`,
              subtitle: `En yeni gelişmeler`,
              description: ``,
            }}
          />
        </div>
    
    <Swiper autoplay modules={[Autoplay]}>
      {sliderData.map((item, index) => (
        <SwiperSlide key={index}>
          <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
                <div className=" md:w-1/2">
                  <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                    {item.head} {"   "}
                  </h1>
                  <p className="mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="animate_right hidden md:w-1/2 lg:block">
                  <div className="relative 2xl:-mr-7.5">
                    <Image
                      src="/images/shape/shape-01.png"
                      alt="shape"
                      width={46}
                      height={246}
                      className="absolute -left-11.5 top-0"
                    />
                    <Image
                      src="/images/shape/shape-02.svg"
                      alt="shape"
                      width={36.9}
                      height={36.7}
                      className="absolute bottom-0 right-0 z-10"
                    />
                    <Image
                      src="/images/shape/shape-03.svg"
                      alt="shape"
                      width={21.64}
                      height={21.66}
                      className="absolute -right-6.5 bottom-0 z-1"
                    />
                    <div className=" relative aspect-[700/444] w-full">
                      <Image
                        className="shadow-solid-l dark:hidden rounded-lg"
                        src={item.img}
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

    </>
  )
}