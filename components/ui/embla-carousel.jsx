"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = props => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla h-[300px] w-[280px]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img block object-cover rounded-lg"
                src={image.src}
                alt="Your alt text"
                width={280}
                height={260}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
