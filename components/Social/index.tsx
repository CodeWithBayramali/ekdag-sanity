'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay,Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../Common/SectionHeader'

import 'swiper/css'
import 'swiper/css/autoplay'
import type { Social } from '@/types'

export default function Social() {

  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('/api/tweet');
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        setTweets(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTweets();
  }, []);
  console.log(tweets)
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
    <div className="animate_top pt-6 mx-auto text-center">
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination,Autoplay]}
        className='custom-swiper'
      >
        {/* Swiper İçeriği */}
        {tweets.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mb-12 tweet-container">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  )
}
