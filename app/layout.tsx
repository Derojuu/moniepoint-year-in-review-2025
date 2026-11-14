import type { Metadata } from "next";
import "@/styles/globals.css";
import { CartProvider } from "@/hooks/useCart";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";

export const metadata: Metadata = {
  title: "Moniepoint - Year in Review 2025",
  description: "Moniepoint's Year in Review 2025. Celebrating a decade of powering Nigeria's financial ecosystem.",
  metadataBase: new URL("https://2025.moniepoint.com"),
  openGraph: {
    title: "Moniepoint - Year in Review 2025",
    description: "Moniepoint's Year in Review 2025",
    url: "https://2025.moniepoint.com",
    siteName: "Moniepoint Year in Review",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moniepoint - Year in Review 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moniepoint - Year in Review 2025",
    description: "Moniepoint's Year in Review 2025",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/asset_11.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0357EE] text-[#061333] antialiased font-sans selection:bg-[#FEE17F] selection:text-[#061333]"
      >
        <CartProvider>
          <NavbarWrapper />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
