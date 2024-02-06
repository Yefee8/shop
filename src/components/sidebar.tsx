"use client";

import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="md:w-[209px] h-full fixed duration-150 top-0 left-0 flex flex-col bg-foreground items-center py-5 md:px-5 px-2 gap-[22px] w-16">
      <h1 className="text-base md:ml-3 flex items-center md:justify-between justify-center gap-2 w-full font-extrabold text-white">
        <div className="flex items-center gap-2">
          <span className="text-lg md:p-2.5 p-1.5 bg-primary rounded-lg">
            SH
          </span>

          <span className="md:flex hidden text-lg">SHOP</span>
        </div>
      </h1>

      <Link href="/" className="w-full">
        <Button
          variant="ghost"
          className={`${manrope.className} ${
            pathname === "/" && "bg-primary"
          } mt-3 md:w-full w-[44px] px-3 py-4 !text-white flex gap-2 text-base font-medium md:justify-start justify-center hover:bg-primary`}
        >
          <FaHome className="text-white text-base rounded-xl" />
          <span className="md:flex hidden">Products</span>
        </Button>
      </Link>

      <Link href="/dashboard" className="w-full">
        <Button
          variant="ghost"
          className={`${manrope.className} ${
            pathname === "/dashboard" && "bg-primary"
          } md:w-full w-[44px] px-3 py-4 !text-white flex gap-2 text-base font-medium md:justify-start justify-center hover:bg-primary`}
        >
          <MdDashboard className="text-white text-base rounded-xl" />
          <span className="md:flex hidden">Dashboard</span>
        </Button>
      </Link>
    </div>
  );
}
