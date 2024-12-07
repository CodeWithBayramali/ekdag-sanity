'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay,Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../Common/SectionHeader'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import 'swiper/css'
import 'swiper/css/autoplay'
import client from '@/sanity/lib/client'
import type { Social } from '@/types'

export default function Social() {

  const [socialData,setSocialData] = useState<Social[]>([])

  useEffect(()=> {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "twitter"]{
          tweetId,
        }`);
        setSocialData(data);
    };
    getUrl();
  },[])

  return (
    <div className='bg-gray-100' 
    style={{
      background: 'url(/images/confetti.png)',
      backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
      }}>
    <div className='max-w-c-1390 w-full mx-auto'>
    <div className="animate_top pt-12 mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `SOSYAL MEDYA`,
              subtitle: ``,
              description: ``,
            }}
          />
        </div>
    
        <Swiper
        autoplay={{ delay: 6000 }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination,Autoplay]}
        className='custom-swiper'
      >
        {/* Swiper İçeriği */}
        {socialData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mb-12 tweet-container mx-3">
              <TwitterTweetEmbed tweetId={item.tweetId} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  )
}
