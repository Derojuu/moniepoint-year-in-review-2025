import React from "react";
import { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Cart & Checkout - Moniepoint Year in Review 2025",
  description: "Moniepoint Business Store & Checkout. Order POS terminals, business cards, and bookkeeping subscriptions.",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CartView />
    </main>
  );
}
