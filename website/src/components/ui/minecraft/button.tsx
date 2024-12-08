import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const MinecraftButtonVariants = cva(
  "inline-flex justify-center items-center uppercase font-bold whitespace-nowrap min-w-fit ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        transparent:
          "text-[var(--mc-core-white)] hover:text-[var(--mc-core-rich-black)] hover:active:text-[var(--mc-core-white)] hover:bg-[var(--mc-core-white)] hover:active:bg-transparent py-[10px] px-[15px] border-2 border-[var(--mc-core-white)]",
        green: "border-2 border-[var(--mc-core-grey-6)] minecraft-button-green",
        gold: "border-2 border-[var(--mc-core-grey-6)] minecraft-button-gold",
        deepBlue:
          "border-2 border-[var(--mc-core-grey-6)] minecraft-button-deepBlue",
        tab: "border border-transparent minecraft-button-tab",
        tabActive: "border border-transparent minecraft-button-tab-active",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface MinecraftButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof MinecraftButtonVariants> {
  asChild?: boolean;
}

const MinecraftButton = React.forwardRef<
  HTMLButtonElement,
  MinecraftButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(MinecraftButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
MinecraftButton.displayName = "MinecraftButton";

export { MinecraftButton, MinecraftButtonVariants };
