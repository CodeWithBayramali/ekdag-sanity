import { Inter } from 'next/font/google'
import "./globals.css";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} dark:bg-black antialiased`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
        <Lines />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
