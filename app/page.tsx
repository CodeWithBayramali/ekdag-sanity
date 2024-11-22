import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Hero from "@/components/Hero";
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
    <FeaturesTab />
    <About />
    <Contact />
    <Blog />
   </main>
  );
}
