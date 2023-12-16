"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [avoidReading, setAvoidReading] = useState(false);

  useEffect(() => {
    if (!cartItems.length && !avoidReading) {
      const jsonItems = localStorage.getItem("cart");
      const localItems = JSON.parse(jsonItems);
     if(localItems) setCartItems(localItems);
      setAvoidReading(true);
    }
    if (avoidReading) localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, avoidReading]);


  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
