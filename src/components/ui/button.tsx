import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ink: "rounded-full bg-ink text-on-ink label-sm hover:bg-olive transition-colors duration-500",
        line: "rounded-full border border-foreground/30 text-foreground label-sm hover:border-foreground hover:bg-foreground hover:text-background transition-colors duration-500",
        ivory: "rounded-full bg-on-ink text-ink label-sm hover:bg-brass transition-colors duration-500",
        lineOnInk: "rounded-full border border-on-ink/30 text-on-ink label-sm hover:border-on-ink hover:bg-on-ink hover:text-ink transition-colors duration-500",
        chip: "rounded-full border border-foreground/20 text-foreground/75 text-[0.8125rem] tracking-wide hover:border-foreground hover:text-foreground aria-pressed:bg-ink aria-pressed:text-on-ink aria-pressed:border-ink transition-colors duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        pill: "h-12 px-7",
        pillSm: "h-10 px-5",
        chip: "h-9 px-4",
        round: "h-11 w-11 rounded-full",
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
