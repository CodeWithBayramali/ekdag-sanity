import React from "react";
import { Feature } from "@/types/index";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg transition-all"
      >
        <div className="md:max-w-xs rounded-lg sm:max-w-full overflow-hidden">
          <div className="relative overflow-hidden group w-full h-80">
            <Image
              className="transition-transform hover:cursor-pointer duration-300 group-hover:scale-110"
              src={icon}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
            />

            {/* Sabit siyah alan */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-75 transition-all duration-300 group-hover:h-full">
              <div className="flex items-center justify-center flex-col gap-y-2 h-full transition-all duration-300">
                <span className={`${dancing_script.className} text-2xl text-white flex flex-row gap-x-4 transition-transform duration-300 transform`}>
                  <p className="text-orange-400">{title}</p> |
                  <p className="text-yellow-400">{description}</p>
                </span>
                <Link className="bg-orange-500 p-2 px-6 text-xs text-white rounded-full" href='/'>Keşfet</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
