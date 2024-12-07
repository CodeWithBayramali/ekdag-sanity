'use client'
import NewsCard from "@/components/NewsCard";
import client from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const BlogPage = () => {

  const [news,setNews] = useState([])

  useEffect(()=> {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "news"]{
          newsTitle,
          subDesc,
          slug,
          newsImage,
        }`);
        setNews(data);
    };
    getUrl();
  },[])

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section>
        <div className="mx-auto mt-24 mb-24 max-w-c-1280 sm:mt-24 px-4 md:px-8 xl:px-0">
          <h1 className="text-2xl my-12 font-bold text-center">Ekdağ Haberler</h1>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {news.map((post, key) => (
              <NewsCard key={key} news={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
