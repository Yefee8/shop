"use client";

import ProductCarousel from "@/components/productCarousel";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  const products = [
    {
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      title: "Fuji Film Camera",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Basic Watch",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Polaroid One Step 2 Camera",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Basic Headphone",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beetle Couple Scale Model",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Basic Bottle",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
  ];

  const recommendedProducts = [
    {
      image:
        "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pentax Camera",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
      title: "Apple Set",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Micheal Kors Watch",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      title: "Fuji Film Camera",
      description:
        "This product is pretty cool, we think you should buy it now. Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <main className="md:w-[calc(100%-267px)] flex flex-col md:items-start gap-16 md:mx-0 mx-4">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl">SH SHOP</h1>

        <p className={`${manrope.className} text-base  font-medium`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut metus
          dui. Aenean rhoncus posuere magna, eget interdum massa efficitur id.
          Maecenas fringilla malesuada ipsum sit amet consequat. Aenean
          vulputate lectus nec nisl imperdiet fermentum. Morbi.
        </p>
      </div>

      <div className={`flex relative flex-col gap-4 w-full md:h-auto h-[700px]`}
      >
        <h1 className="font-bold text-2xl">Most Saled Products</h1>
        <ProductCarousel products={products} />
      </div>

      <div className={`flex relative flex-col gap-4 w-full md:h-auto h-[700px]`}
      >
        <h1 className="font-bold text-2xl">Recommended Products</h1>
        <ProductCarousel products={recommendedProducts} />
      </div>

      <div className="flex flex-col gap-4 pb-16">
        <h1 className="font-bold text-2xl">Our Bussines Journey</h1>

        <p className={cn("font-medium text-base", manrope.className)}>
          Back in the day, we were a pretty small company. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vivamus a cursus nisl. Aenean non
          ultrices dui, et suscipit diam. Aenean cursus auctor mauris ut mollis.
          Suspendisse eu diam mattis, finibus nisi ut, mattis nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nulla eget lacus ante. Pellentesque a metus nibh. Donec
          quis magna in ex facilisis fermentum. Sed eu sodales arcu. Vestibulum
          eget sapien sed erat efficitur finibus. Aenean euismod sapien diam,
          eget dapibus ex mattis eget. Pellentesque scelerisque quam vitae est
          dignissim, eget elementum nulla sagittis.
        </p>
      </div>
    </main>
  );
}
