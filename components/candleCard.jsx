"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="h-full w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={280}
                  height={260}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h2>Texto de la Vela</h2>
      <Button asChild size="lg">
        <Link href={`/armar/envase=${id}`}>Personalizar</Link>
      </Button>
    </div>
  );
};

export default CandleCard;
