import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const MinecraftArrowVariants = cva("minecraft-arrow", {
  variants: {
    variant: {
      default: "",
    },
    direction: {
      default: "minecraft-arrow-right",
      left: "minecraft-arrow-left"
    },
  },
  defaultVariants: {
    variant: "default",
    direction: "default",
  },
});

export interface MinecraftArrowProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof MinecraftArrowVariants> {
  asChild?: boolean;
}

const MinecraftArrow = React.forwardRef<HTMLSpanElement, MinecraftArrowProps>(
  ({ className, variant, asChild = false, direction, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(
          MinecraftArrowVariants({ variant, direction, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
MinecraftArrow.displayName = "MinecraftArrow";

export { MinecraftArrow, MinecraftArrowVariants };
