import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/site-header/Header";
import SiteFooter from "@/components/footer/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-inter", 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Raw Tailwind CSS Components Library --muntasir/ui",
  description: "Raw custom css and tailwind classes ui component library to avaid ugly packages installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Header/>
        <div className="min-h-[80vh]">
          {children}
        </div>
        <SiteFooter/>
      </body>
    </html>
  );
}