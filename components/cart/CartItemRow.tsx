"use client";

import React from "react";
import { CartProduct } from "@/types";
import { formatCurrency } from "@/utils/formatters";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, Add01Icon, Remove01Icon } from "@hugeicons/core-free-icons";

interface CartItemRowProps {
  item: CartProduct;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemRowProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100 gap-6 transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        {/* Product image */}
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#EBF8FD] rounded-xl flex items-center justify-center p-2 shrink-0">
          <img
            alt={item.name}
            className="max-h-full max-w-full object-contain"
            src={item.image}
          />
        </div>

        {/* Product details */}
        <div>
          <span className="text-xs uppercase font-semibold text-[#0357EE] tracking-wider font-sans">
            {item.category}
          </span>
          <h4 className="text-lg md:text-xl font-medium text-[#061333] font-sans mt-0.5">
            {item.name}
          </h4>
          <p className="text-sm text-gray-500 font-sans mt-1 line-clamp-1">
            {item.description}
          </p>
          <div className="text-base font-semibold text-[#061333] font-sans mt-2">
            {formatCurrency(item.price, item.currency)}
          </div>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 shrink-0">
        <div className="flex items-center border border-gray-200 rounded-full p-1 bg-gray-50">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-gray-600 hover:text-black hover:bg-gray-100 shadow-sm transition-colors"
            aria-label="Decrease quantity"
          >
            <HugeiconsIcon icon={Remove01Icon} className="w-4 h-4" />
          </button>
          <span className="w-10 text-center font-medium font-sans text-sm text-[#061333]">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-gray-600 hover:text-black hover:bg-gray-100 shadow-sm transition-colors"
            aria-label="Increase quantity"
          >
            <HugeiconsIcon icon={Add01Icon} className="w-4 h-4" />
          </button>
        </div>

        <div className="text-right min-w-[90px]">
          <div className="text-lg font-bold text-[#0357EE] font-sans">
            {formatCurrency(item.price * item.quantity, item.currency)}
          </div>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
          aria-label="Remove item"
        >
          <HugeiconsIcon icon={Delete02Icon} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
