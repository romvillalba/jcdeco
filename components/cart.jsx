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
          (0)
        </span>
      </SheetTrigger>
      <SheetContent  className="w-full">
        <SheetHeader>
          <SheetTitle>Carrito</SheetTitle>
          <ScrollArea className="h-screen w-full pb-40">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        <Button className="w-[100%] absolute left-0 bottom-20">Comprar Carrito</Button>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
