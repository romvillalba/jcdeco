import Image from "next/image";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
const CandleCard = () => {
  return (
    <div className="flex-column-reverse h-[220px] w-[120px] relative">
      <div className="relative  h-[220px] w-[120px]">
        <Image alt="vela" fill style={{objectFit: "contain"}} src="/img/candle_1.webp" />
      </div>
      <h2>Texto de la Vela</h2>
      <Link href="/" className={buttonVariants({ variant: "primary" })}>Personalizar</Link>

    </div>
  );
};

export default CandleCard;
