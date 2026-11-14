"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ShoppingBag02Icon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/Button";

export function CartView() {
  const { items, updateQuantity, removeItem, clearCart, subtotal, tax, total } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 shadow-sm">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-12 h-12" />
        </div>
        <h2 className="text-3xl md:text-5xl font-medium text-[#061333] font-sans mb-4">
          Order Placed Successfully!
        </h2>
        <p className="text-lg text-gray-600 font-sans max-w-[500px] mb-8 leading-relaxed">
          Thank you for choosing Moniepoint. A confirmation invoice and delivery dispatch schedule has been generated.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg" className="px-8">
            Return to Year in Review 2025
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full 2xl:container mx-auto px-4 md:px-16 py-8 md:py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0357EE] hover:text-[#0441A3] font-medium font-sans text-sm md:text-base group"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Moniepoint 2025 Review</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-gray-200 gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-medium text-[#061333] font-sans">
            Business Checkout &amp; Cart
          </h1>
          <p className="text-gray-500 font-sans text-base mt-2">
            Equip your enterprise with Moniepoint payment hardware, accounts, and tools.
          </p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors self-start md:self-auto"
          >
            Clear Entire Cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-blue-50 text-[#0357EE] flex items-center justify-center mb-6">
            <HugeiconsIcon icon={ShoppingBag02Icon} className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-medium text-[#061333] font-sans mb-2">
            Your Cart is Currently Empty
          </h3>
          <p className="text-gray-500 font-sans max-w-[400px] mb-6">
            You can return to the Year in Review presentation to explore our impact and story.
          </p>
          <Link href="/">
            <Button variant="primary" size="md">
              Explore 2025 Review
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart items list */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>

          {/* Order Summary sidebar */}
          <div className="lg:col-span-4 sticky top-28">
            <OrderSummary
              subtotal={subtotal}
              tax={tax}
              total={total}
              itemCount={itemCount}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
}
