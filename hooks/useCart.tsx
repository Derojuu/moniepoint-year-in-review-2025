"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartProduct, CartState } from "@/types";
import { INITIAL_PRODUCTS } from "@/constants/products";

const CartContext = createContext<CartState | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartProduct[]>(INITIAL_PRODUCTS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("moniepoint_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveItems = (newItems: CartProduct[]) => {
    setItems(newItems);
    try {
      localStorage.setItem("moniepoint_cart", JSON.stringify(newItems));
    } catch {
      // ignore
    }
  };

  const addItem = (product: CartProduct) => {
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      saveItems(
        items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      saveItems([...items, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id: string) => {
    saveItems(items.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      saveItems(
        items.map((i) => (i.id === id ? { ...i, quantity } : i))
      );
    }
  };

  const clearCart = () => {
    saveItems([]);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.075; // 7.5% VAT in Nigeria
  const total = subtotal + tax;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        tax,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartState {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
