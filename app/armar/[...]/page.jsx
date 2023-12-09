import EmblaCarousel from "@/components/ui/embla-carousel"

const { CandleForm } = require("../components/candleForm")


const page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center py-12">
      <EmblaCarousel/>
      <CandleForm/>
    </div>
  )
}

export default page