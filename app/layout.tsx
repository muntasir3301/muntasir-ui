import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Hello World! Home",
  description: "Full stack AI power Nextjs Application",
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
        {children}
      </body>
    </html>
  );
}