import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 px-5 font-display text-base leading-none tracking-tight transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-accent text-on-accent hover:bg-ink hover:text-paper",
        cover: "bg-accent text-on-accent hover:bg-paper hover:text-ink",
        ghost: "bg-transparent text-ink hover:bg-paper-2",
        line: "border border-line bg-paper text-ink hover:border-ink",
        coverGhost:
          "border border-cover-line bg-transparent text-cover-fg hover:bg-cover-line",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  asChild = false,
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant }), className)} type={asChild ? undefined : type} {...props} />
  );
}
