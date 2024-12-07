"use client";
import client, { urlFor } from "@/sanity/lib/client";
import { Image } from "@/types";
import React, { useEffect, useState } from "react";

export default function GalleryPage() {
  const [gallery, setGallery] = useState<{gallery: {galleryImages: Image[]}}| null>(null);

  useEffect(() => {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "gallery"]{
        galleryImages
        }`);
      setGallery(data);
    };
    getUrl();
  }, []);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-28 max-w-c-1280 w-full mx-auto">
      { gallery && gallery[0]?.galleryImages?.map((item, index) => (
        <div key={index} className="relative overflow-hidden group w-full h-60 rounded-lg">
          <img
            className="w-full h-60 transition-transform hover:cursor-pointer duration-300 group-hover:scale-110"
            src={urlFor(item).url()}
            alt={urlFor(item).url()}
          />
        </div>
      ))}
    </div>
  );
}
