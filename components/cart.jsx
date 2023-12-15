"use client";
import React, { useContext } from "react";
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
import { CartContext } from "./providers/cart-provider";

const Cart = () => {
  const {cartItems} =  useContext(CartContext);
  
  return (
    <Sheet>
      <SheetTrigger>
        <span className="flex">
          <ShoppingCartIcon />
          ({cartItems.length})
        </span>
      </SheetTrigger>
      <SheetContent className="w-full p-4">
        <SheetHeader>
          <SheetTitle>{`Carrito (${cartItems.length})`}</SheetTitle>
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
            <Button className="w-[90%] sticky bottom-0 ml-4 mt-14">
              Comprar Carrito
            </Button>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
