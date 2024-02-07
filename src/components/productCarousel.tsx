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
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

interface props {
  products: {
    image: string;
    title: string;
    description: string;
  }[];
}

export default function ProductCarousel(props: props) {
  return (
    <Carousel className="flex md:static absolute md:top-[48px] w-full lg:!flex-row !flex-col">
      <CarouselContent>
        {props.products.map((product) => {
          return (
            <CarouselItem className="lg:basis-1/3 md:basis-1/2">
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

      <div className="w-full md:hidden flex justify-center mt-4 h-8">
        <div className="relative w-20 gap-4 flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselPrevious className="md:flex hidden" />
      <CarouselNext className="md:flex hidden" />
    </Carousel>
  );
}
