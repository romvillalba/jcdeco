import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CandleCard = () => {
  return (
    <div className="flex-col text-center items-center justify-center px-16 py-2">
      <div className="relative h-[220px] w-[220px]">
        <Image
          className="rounded-lg"
          alt="vela"
          fill
          style={{ objectFit: "contain" }}
          src="/img/candle_1.webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>

      <h2>Texto de la Vela</h2>
      <Button asChild size="lg">
        <Link href="/armar">Personalizar</Link>
      </Button>
    </div>
  );
};

export default CandleCard;
