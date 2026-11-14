import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-[100px] cursor-pointer";
    
    const variants = {
      primary: "bg-[#0357EE] text-white hover:bg-[#0441A3]",
      secondary: "bg-[#FEE17F] text-[#061333] hover:bg-[#ebd06b]",
      outline: "border border-white/20 bg-white/10 text-white hover:bg-white/20",
      ghost: "hover:bg-black/5 text-[#061333]",
    };

    const sizes = {
      sm: "h-[36px] px-4 text-sm",
      md: "h-[48px] px-6 text-base",
      lg: "h-[58px] px-8 text-xl",
    };

    return (
      <button
        ref={ref}
        suppressHydrationWarning
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
