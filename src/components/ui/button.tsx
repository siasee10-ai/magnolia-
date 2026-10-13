import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gate-blue/40 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 active:translate-y-0.5 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#248ce0] via-[#186bb0] to-[#0e5088] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 border-t border-white/40",
        accent:
          "bg-gradient-to-r from-[#fa4d9b] via-[#d92672] to-[#b51259] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 border-t border-white/40",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border border-gate-blue/40 bg-white/90 text-gate-blue shadow-xs backdrop-blur-md hover:bg-gate-blue/10 hover:border-gate-blue hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:-translate-y-0.5",
        ghost: "hover:bg-gate-blue/10 hover:text-gate-blue",
        link: "text-gate-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
