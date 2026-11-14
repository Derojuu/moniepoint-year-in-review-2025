"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/ui/Preloader";
import { FloatingCartButton } from "@/components/cart/FloatingCartButton";

export function NavbarWrapper() {
  return (
    <>
      <Preloader />
      <Header />
      <FloatingCartButton />
    </>
  );
}
