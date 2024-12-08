import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const MinecraftCardVariants = cva(
  "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-5",
  {
    variants: {
      variant: {
        default: "minecraft-card-shadow-default",
        banner: "minecraft-card-shadow-banner",
        green: "minecraft-card-shadow-green",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface MinecraftCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof MinecraftCardVariants> {
  asChild?: boolean;
}

const MinecraftCard = React.forwardRef<HTMLDivElement, MinecraftCardProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(MinecraftCardVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
MinecraftCard.displayName = "MinecraftCard";

export { MinecraftCard, MinecraftCardVariants };
