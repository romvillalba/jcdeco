import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CandleCard = () => {
  return (
   
      <div className="flex-col text-center items-center justify-center ">
       <div className="relative h-[220px] w-[220px]">
       <Image alt="vela" fill style={{ objectFit: "contain" }} src="/img/candle_1.webp" />
       </div>
     
      <h2>Texto de la Vela</h2>
      <Button asChild size='lg'>
        <Link href="/armar">Personalizar</Link>
      </Button>
      </div>
  );
};

export default CandleCard;