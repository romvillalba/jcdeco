import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="flex">
          <ShoppingCartIcon />
          (0)
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrito</SheetTitle>
          <SheetDescription>No hay items en el carrito</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
