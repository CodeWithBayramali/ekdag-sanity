'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facility } from '@/types';
import Link from 'next/link';
import { GrMapLocation } from 'react-icons/gr';
import FacilityMap from './FacilityMap';
import { urlFor } from '@/sanity/lib/client';


export default function FacilityCard({ facility }: { facility: Facility }) {
  const { cartImage, tesisName, map, _id } = facility;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="group relative rounded-lg pb-9 dark:bg-blacksection overflow-hidden"
      >
        {/* Image with Hover Effect */}
        <Link href={`/tesisler/${_id}`} className="relative block aspect-[368/239]">
          <img
            src={urlFor(cartImage).url()}
            alt={cartImage}
            className="w-full h-[350px] rounded-md object-cover transition duration-300"
          />
          {/* Explore Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg shadow-lg">
              Keşfet
            </button>
          </div>
        </Link>

        {/* Content */}
        <div className="px-4 text-center">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 gap-x-6 flex flex-row justify-center items-center text-md text-center font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
            <Link
              href={`/tesisler/${_id}`}
              className={`ml-4 font-extrabold text-xl text-orange-500`}
            >
              {`${tesisName}`}
            </Link>

            {/* Map Icon */}
            <GrMapLocation
              size={32}
              className="text-white bg-indigo-600 p-1.5 rounded-full cursor-pointer"
              onClick={handleOpenModal} // Modal açılır
            />
          </h3>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <FacilityMap isOpen={isModalOpen} onClose={handleCloseModal}>
          {map}
        </FacilityMap>
      )}
    </>
  );
}