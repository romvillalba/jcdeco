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

const CartItem = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nombre Item</CardTitle>
        <CardDescription>Descripción</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-center">
          <Image
            src={"/img/candle_2.webp"}
            alt={"alt"}
            width={110}
            height={110}
            className="object-cover rounded-lg"
          />
          <div>
            <ul>
              <li>Esencia : Esencia 1</li>
              <li>Color : Rojo</li>
              <li>Cantidad : 5 </li>
              <li><Button variant="destructive" size={`sm`}><Trash2Icon /> Quitar </Button></li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CartItem;
