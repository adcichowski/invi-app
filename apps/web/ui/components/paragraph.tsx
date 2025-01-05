import { ReactNode } from "react";
import { cn } from "../lib/utils/utils";
import { twMerge } from "tailwind-merge";

type ParagraphTypes = "p" | "span" | "div";
export const Paragraph = ({
  type: Type,
  className,
  ...props
}: {
  type: ParagraphTypes;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <Type
      className={cn(twMerge("text-muted-foreground", className))}
      {...props}
    />
  );
};
