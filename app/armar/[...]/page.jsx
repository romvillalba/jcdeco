import EmblaCarousel from "@/components/ui/embla-carousel"

const { CandleForm } = require("../components/candleForm")
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

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center py-12">
      <EmblaCarousel slides={images}/>
      <CandleForm/>
    </div>
  )
}

export default page