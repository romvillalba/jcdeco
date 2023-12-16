"use client";
import React, { useContext } from "react";
import {
  Sheet,
  SheetClose,
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
import { useRouter } from "next/navigation";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger>
        <span className="flex">
          <ShoppingCartIcon />({cartItems.length})
        </span>
      </SheetTrigger>
      <SheetContent className="w-[350px]  p-4">
        <SheetHeader>
          {cartItems.length > 0 ? (
            <>
              <SheetTitle>{`Carrito (${cartItems.length})`}</SheetTitle>
              <ScrollArea
                className="pb-24 w-full text-sm"
                style={{
                  height: "100svh",
                }}
              >
                {cartItems.map((cartItem, index) => (
                  <CartItem
                    key={cartItem + index}
                    cartItem={cartItem}
                    index={index}
                    removeItem={removeItem}
                  />
                ))}
                <SheetClose asChild>
                  <Button className="w-[90%] sticky bottom-0 ml-4 mt-14">
                    Comprar Carrito
                  </Button>
                </SheetClose>
              </ScrollArea>
            </>
          ) : (
            <>
              <SheetTitle>No tienes items en el carrito</SheetTitle>

              <SheetDescription className="py-14">
                Agrega items al carrito para continuar con una compra
              </SheetDescription>
              <SheetClose asChild className=" ml-4">
                  <Button asChild className="w-[90%]">
                    <Link href='/armar'>Ir a la tienda</Link>
                  </Button>
              </SheetClose>
            </>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
