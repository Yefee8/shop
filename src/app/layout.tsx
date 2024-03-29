import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const lato = Lato({ subsets: ["latin"], weight:["300", "700", "900"] });

export const metadata: Metadata = {
  title: "SH Shop - Homepage",
  description: "SH Shop Template, coded by Yefee",
  viewport:"width=device-width, initial-scale=1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} flex w-full md:gap-[58px] gap-4`}>
        <Sidebar />
        <div className="ml-16 mt-[47px] md:ml-[267px] md:w-[calc(100%-267px)] text-white">{children}</div></body>
    </html>
  );
}
