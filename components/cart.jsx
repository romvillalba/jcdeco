import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ShoppingCartIcon } from "lucide-react";
import CartItem from "./ui/cart-item";
import { Button } from "./ui/button";
const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="flex">
          <ShoppingCartIcon />
          (5)
        </span>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>{`Carrito (5)`}</SheetTitle>
          <ScrollArea
            className="pb-24 w-full"
            style={{
              height: "100svh",
            }}
          >
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
           
           
            

            <Button className="w-[95%] sticky bottom-0 mt-10">
              Comprar Carrito
            </Button>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
