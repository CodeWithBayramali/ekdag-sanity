import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function FooterTop() {
  return (
    <div>
        <h4 className="mb-9 text-center text-itemtitle2  font-bold text-blue-950 dark:text-blue">
        Önerilen Kurumsal Sayfalar
      </h4>

      <div className="bg-blue-200 py-4 bg-opacity-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 flex flex-wrap justify-between">
      <ul className="flex flex-col flex-wrap gap-y-3">
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="https://antalya.bel.tr/"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
              Antalya Büyükşehir Belediyesi
            </span>
          </Link>
        </li>
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
          target="_blank"
            href="https://atasem.antalya.bel.tr/"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
              ATASEM
            </span>
          </Link>
        </li>
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="http://www.antalyakadinmuzesi.org"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
            Antalya Kadın Müzesi
            </span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col flex-wrap gap-y-3">
        
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
          target="_blank"
            href="https://genclikspor.antalya.bel.tr/"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
              Antalya Gençlik ve Spor Bakanlığı
            </span>
          </Link>
        </li>
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="https://www.ilan.gov.tr"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
            Resmi İlan Portalı
            </span>
          </Link>
        </li>
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="http://kiggem.antalya.bel.tr/index.html"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
            Kadın İş Geliştirme Merkezi
            </span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col flex-wrap gap-y-3">
        
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="https://atabem.antalya.bel.tr"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
              ATABEM
            </span>
          </Link>
        </li>
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="http://antalyazoo.antalya.bel.tr"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
              Antalya Hayvanat Bahçesi
            </span>
          </Link>
        </li>
        <li className="flex items-center w-full">
        <MdOutlineKeyboardArrowRight />
          <Link
            target="_blank"
            href="https://anset.com.tr"
            className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded"
          >
            <span className="block transform transition-transform hover:translate-x-2">
              ANSET
            </span>
          </Link>
        </li>
      </ul>
      </div>
    </div>
    </div>
    
  );
}
