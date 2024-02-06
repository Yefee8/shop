import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "./ui/card";
const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

interface props{
    products: {
        image:string;
        title:string;
        description:string;
    }[]
}

export default function ProductCarousel(props: props) {

  return (
    <Carousel className="md:w-2/3">
          <CarouselContent>
            {props.products.map((product) => {
              return (
                <CarouselItem className="md:basis-1/2">
                  <Card
                    className={cn(
                      "border-[#1f1f30] border-opacity-60 hover:shadow-lg duration-200"
                    )}
                  >
                    <CardHeader className="flex flex-col gap-2">
                      <CardDescription className="text-white">
                        <img
                          className="rounded-xl w-full md:h-64 h-96 object-cover object-center"
                          alt={product.image}
                          src={product.image}
                        />
                      </CardDescription>
                      <CardTitle className="text-xl font-bold">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={cn("text-sm", manrope.className)}>
                      {product.description}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full font-bold text-base gap-2 flex items-center justify-center">
                        <FaHandHoldingDollar />
                        Buy It!
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
  );
}
