"use client";

import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ShoppingCart01Icon } from "@hugeicons/core-free-icons";
import { useCart } from "@/hooks/useCart";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { items } = useCart();
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-dvh w-screen bg-[#FFF4D1] z-[9999] overflow-hidden px-6 py-8 flex flex-col justify-between transition-transform duration-300">
      <div className="flex items-center justify-between">
        <Link href="/" onClick={onClose}>
          <div className="w-[140px] h-[40px] relative">
            <img
              alt="Moniepoint Logo"
              className="w-full h-full object-contain"
              src="/images/asset_11.svg"
            />
          </div>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-[#061333]/10 text-[#061333] hover:bg-[#061333]/20"
          aria-label="Close menu"
        >
          <HugeiconsIcon icon={Cancel01Icon} className="w-7 h-7 text-[#061333]" />
        </button>
      </div>

      <nav className="flex flex-col gap-8 my-auto text-center">
        <a
          href="/#our-story"
          onClick={onClose}
          className="text-3xl font-medium text-[#0357EE] hover:text-[#0441A3] transition-colors"
        >
          Our Story
        </a>
        <a
          href="/#download"
          onClick={onClose}
          className="text-3xl font-medium text-[#0357EE] hover:text-[#0441A3] transition-colors"
        >
          Download Review
        </a>
        <Link
          href="/cart"
          onClick={onClose}
          className="text-3xl font-medium text-[#0357EE] hover:text-[#0441A3] transition-colors flex items-center justify-center gap-3"
        >
          <HugeiconsIcon icon={ShoppingCart01Icon} className="w-8 h-8 text-[#0357EE]" />
          <span>Cart ({totalCount})</span>
        </Link>
      </nav>

      <div className="text-center text-sm text-[#061333]/60">
        © 2025 Moniepoint Inc. All rights reserved.
      </div>
    </div>
  );
}
