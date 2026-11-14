import { CartProduct } from "@/types";

export const INITIAL_PRODUCTS: CartProduct[] = [
  {
    id: "moniepoint-smart-pos",
    name: "Moniepoint Smart POS Terminal",
    category: "Hardware / In-person Payments",
    price: 35000,
    currency: "₦",
    image: "/images/asset_23.webp",
    description: "Accept card payments, generate QR codes, dispute resolution in seconds, 4G + WiFi dual connectivity.",
    features: [
      "Instant settlement to Moniepoint Business Account",
      "Long-lasting battery (up to 48 hours)",
      "Built-in thermal receipt printer",
      "Free data SIM card included"
    ],
    inStock: true,
    quantity: 1,
  },
  {
    id: "moniepoint-card-pack",
    name: "Moniepoint Business Debit Card (Bulk Pack of 5)",
    category: "Cards & Banking",
    price: 5000,
    currency: "₦",
    image: "/images/asset_65.webp",
    description: "Premium contactless debit cards for your business managers and key personnel.",
    features: [
      "Zero maintenance fees",
      "Customizable daily spending limits",
      "Global Mastercard / Verve acceptance"
    ],
    inStock: true,
    quantity: 2,
  },
  {
    id: "moniebook-pro-license",
    name: "Moniebook All-in-One Annual Subscription",
    category: "Software / Business Management",
    price: 24000,
    currency: "₦",
    image: "/images/asset_41.jpg",
    description: "Nigeria's first platform seamlessly unifying bookkeeping, automated invoice reconciliation, and inventory tracking.",
    features: [
      "Automated sales and expense tracking",
      "Multi-store inventory management",
      "Real-time tax compliance reports"
    ],
    inStock: true,
    quantity: 1,
  },
];
