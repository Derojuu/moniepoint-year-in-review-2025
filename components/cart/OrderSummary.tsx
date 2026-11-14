"use client";

import React, { useState } from "react";
import { formatCurrency } from "@/utils/formatters";
import { Button } from "@/components/ui/Button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  itemCount: number;
  onCheckout: () => void;
}

export function OrderSummary({
  subtotal,
  tax,
  total,
  itemCount,
  onCheckout,
}: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    if (promoCode.trim().toUpperCase() === "MONIE2025") {
      const discVal = subtotal * 0.1; // 10% discount
      setDiscount(discVal);
      setAppliedPromo("MONIE2025 (10% OFF)");
    } else {
      setPromoError("Invalid code. Try MONIE2025");
    }
  };

  const finalTotal = Math.max(0, total - discount);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-medium text-[#061333] font-sans pb-4 border-b border-gray-100">
          Order Summary
        </h3>

        <div className="space-y-4 py-6 text-sm md:text-base font-sans text-gray-600 border-b border-gray-100">
          <div className="flex justify-between">
            <span>Items ({itemCount})</span>
            <span className="font-medium text-[#061333]">{formatCurrency(subtotal)}</span>
          </div>

          <div className="flex justify-between">
            <span>VAT (7.5%)</span>
            <span className="font-medium text-[#061333]">{formatCurrency(tax)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600 font-medium">
              <span>Discount ({appliedPromo})</span>
              <span>-{formatCurrency(discount)}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span>Standard Delivery</span>
            <span className="text-green-600 font-semibold uppercase text-xs px-2.5 py-1 bg-green-50 rounded-full">
              Free Nationwide
            </span>
          </div>
        </div>

        {/* Promo Code Input */}
        <form onSubmit={handleApplyPromo} className="py-6 border-b border-gray-100">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">
            Promo Code (Use: MONIE2025)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. MONIE2025"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans focus:outline-none focus:border-[#0357EE]"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#061333] text-white rounded-xl text-sm font-medium hover:bg-black transition-colors"
            >
              Apply
            </button>
          </div>
          {appliedPromo && (
            <p className="text-xs text-green-600 mt-2 flex items-center gap-1 font-medium">
              <HugeiconsIcon icon={CheckmarkCircle02Icon} className="w-4 h-4" /> Coupon applied successfully!
            </p>
          )}
          {promoError && (
            <p className="text-xs text-red-500 mt-2 font-medium">{promoError}</p>
          )}
        </form>

        {/* Final Total */}
        <div className="py-6 flex items-baseline justify-between">
          <div>
            <span className="text-lg font-medium text-[#061333] font-sans">Total Amount</span>
            <p className="text-xs text-gray-400 font-sans">Includes taxes and shipping</p>
          </div>
          <span className="text-2xl md:text-3xl font-bold text-[#0357EE] font-sans">
            {formatCurrency(finalTotal)}
          </span>
        </div>
      </div>

      <Button
        onClick={onCheckout}
        disabled={itemCount === 0}
        variant="primary"
        size="lg"
        className="w-full flex items-center justify-center gap-3 text-lg font-medium mt-4 shadow-lg shadow-blue-500/20"
      >
        <span>Proceed to Moniepoint Checkout</span>
        <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
      </Button>
    </div>
  );
}
