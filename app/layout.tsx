import "./globals.css";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ["latin"], weight:['200','400','700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <Lines />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
