
import Link from "next/link";
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
    <div className="flex-col text-center items-center justify-center px-16 py-2">
      <div className="relative h-[280px] w-[260px]">
      <Carousel images={images}/>
      
      </div>

      <h2>Texto de la Vela</h2>
      <Button asChild size="lg">
        <Link href={`/armar/envase=${id}`}>Personalizar</Link>
      </Button>
    </div>
  );
};

export default CandleCard;
