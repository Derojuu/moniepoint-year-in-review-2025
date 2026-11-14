import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        suppressHydrationWarning
        className={cn(
          "w-full px-4 h-[60px] rounded-lg bg-[#18284D] placeholder:text-[#425480] font-sans focus:outline-none text-white border-2 border-transparent focus:border-[#0357EE] transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
