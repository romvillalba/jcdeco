import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { Separator } from "./separator";

const CartItem = () => {
  return (
    <Card className="w-[100%] border-none">
      <CardHeader>
        <CardTitle>Nombre Item</CardTitle>
        <CardDescription>Esencia</CardDescription>
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
            <p>Color : Rojo</p>
            <p>Cantidad : 5 </p>
            <p>
              <Button variant="destructive" size={`sm`}>
                <Trash2Icon /> Quitar{" "}
              </Button>
            </p>
          </div>
        </div>
      </CardContent>
      <Separator />
      {/* <CardFooter>
      </CardFooter> */}
    </Card>
  );
};

export default CartItem;
