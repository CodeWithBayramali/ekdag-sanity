import React from 'react'
import {motion} from 'framer-motion'
import { Feature } from '@/types';
import Link from 'next/link';

export default function CardItem({feature}: {feature: Feature}) {
    const { icon, title, description, link } = feature;

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
          className="animate_top rounded-lg bg-white pb-9 shadow-solid-8 dark:bg-blacksection"
        >
          <Link href={`${link}`} className="relative block aspect-[368/239]">
            <img src={icon} alt={title} className='w-full h-[350px]' />
          </Link>
  
          <div className="px-4 text-center">
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-md text-center font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={`${link}`}>
                {`${title.slice(0, 40)}`}
              </Link>
            </h3>
            <p className="line-clamp-3">{description}</p>
          </div>
        </motion.div>
      </>
    );
}
