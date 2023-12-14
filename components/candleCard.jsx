import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carousel from "./ui/carousel";

const CandleCard = ({ id }) => {
  const images = [
    {
      src: "/img/candle_2.webp",
      alt: "Vela 1",
    },
    {
      src: "/img/candle_3.webp",
      alt: "Vela 2",
    },
    // ...
    {
      src: "/img/candle_4.webp",
      alt: "Vela n",
    },
  ];

  return (
    <Card className="text-center px-0 space-x-0 border-orange-500 " >
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="relative h-[280px] w-[260px]">
        <Carousel images={images} />
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className='w-full'>
          <Link href={`/armar/envase=${id}`}>Personalizar</Link>
        </Button>
      </CardFooter>
    </Card>
    // <div className="flex-col text-center items-center justify-center rounded-lg p-2 border-solid border-2 border-orange-500 ">
    //   <div className="relative h-[280px] w-[260px]">
    //     <Carousel images={images} />
    //   </div>

    //   <h2>Texto de la Vela</h2>
    //   <Button asChild size="lg">
    //     <Link href={`/armar/envase=${id}`}>Personalizar</Link>
    //   </Button>
    // </div>
  );
};

export default CandleCard;
