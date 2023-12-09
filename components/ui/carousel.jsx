"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = ({images}) => {
  return (
    <Swiper
      navigation
      pagination={{ type: "bullets" }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
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
  );
};

export default Carousel;
