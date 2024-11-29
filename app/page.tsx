import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Social from "@/components/Social";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ekdağ | Anasayfa",
  description: "Ekdağ Tesislerini Keşfedin",
  // other metadata
};

export default function Home() {
  return (
   <main>
    <Hero />
    <Feature />
    <News />
    <Social />
     <FeaturesTab />
    {/* <About />  */}
    <Contact />
    <Blog />
   </main>
  );
}
