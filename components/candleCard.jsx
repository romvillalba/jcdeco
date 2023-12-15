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

const CandleCard = ({ id,name,description,images }) => {
  


  return (
    <Card className="text-center border-orange-500 w-[200px]" >
      <CardHeader>
        <CardTitle className={"text-sm"}>{name}</CardTitle>
        <CardDescription className={"whitespace-pre-line text-xs h-12"}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative ">
        <Carousel images={images} />
      </CardContent>
      <CardFooter>
        <Button asChild size="sm" className='w-full'>
          <Link href={`/armar/envase=${id}`}>Personalizar</Link>
        </Button>
      </CardFooter>
    </Card>
    
  );
};

export default CandleCard;
