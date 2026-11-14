import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "yellow" | "blue" | "dark";
}

export function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-[#0357EE] text-white",
    yellow: "bg-[#FEE17F] text-[#061333]",
    blue: "bg-[#1F6AF0] text-white",
    dark: "bg-[#061333] text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-sans",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
