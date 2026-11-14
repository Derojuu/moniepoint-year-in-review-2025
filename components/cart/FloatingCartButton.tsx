"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCart01Icon } from "@hugeicons/core-free-icons";

export function FloatingCartButton() {
  const { items } = useCart();
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <aside aria-label="Cart shortcut" className="fixed bottom-6 right-6 z-40">
      <Link
        href="/cart"
        className="group flex items-center gap-2 bg-[#0357EE] hover:bg-[#0243b8] text-white px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(3,87,238,0.4)] border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="View shopping cart"
      >
        <div className="relative flex items-center justify-center">
          <HugeiconsIcon icon={ShoppingCart01Icon} className="w-6 h-6 text-white group-hover:rotate-6 transition-transform" />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#FEE17F] text-[#061333] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
              {totalCount}
            </span>
          )}
        </div>
        <span className="font-sans font-medium text-sm md:text-base pr-1">
          Cart {totalCount > 0 && `(${totalCount})`}
        </span>
      </Link>
    </aside>
  );
}
