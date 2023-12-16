import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { Separator } from "./separator";

const CartItem = ({cartItem,index,removeItem}) => {
  console.log(cartItem);
  return (

    <Card className="w-[100%] border-none">
      <CardHeader>
        <CardTitle>{cartItem.envase}</CardTitle>
        <CardDescription>{cartItem.esencia}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-4">
          <Image
            src={"/img/candle_2.webp"}
            alt={"alt"}
            width={110}
            height={110}
            className="object-cover rounded-lg "
          />
          <div className="flex flex-col gap-2 mx-auto">
            <p>Color :  {cartItem.color}</p>
            <p>Cantidad : {cartItem.cantidad} </p>
            <p>
              <Button variant="destructive" size={`sm`} onClick={()=>{removeItem(index)}}>
                <Trash2Icon /> Quitar{" "}
              </Button>
            </p>
          </div>
        </div>
      </CardContent>
      <Separator />
    </Card>
  );
};

export default CartItem;
