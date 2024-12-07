import type { NewsCard, Slug } from '@/types';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/client';
import Image from 'next/image';

export default function NewsCard({news}: {news: NewsCard}) {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/${news.slug?.current}`} className="relative block aspect-[368/239]">
          <Image src={news.newsImage ? urlFor(news.newsImage).url() : '/path/to/placeholder-image.jpg'} alt={'asdsd.png'} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/${news.slug?.current}`}>
              {`${news.newsTitle?.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{`${news.subDesc?.slice(0,70)}...`}</p>
        </div>
      </motion.div>
    </>
  );
}
