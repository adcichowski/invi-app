import { ReactNode } from "react";
import { cn } from "../lib/utils/utils";
import { twMerge } from "tailwind-merge";

type HeadingTypes = "h1" | "h2" | "h3";

const classPerType = {
  h1: "font-black text-6xl",
  h2: "font-black text-5xl",
  h3: "",
} satisfies Record<HeadingTypes, string>;

export const Heading = ({
  type: Type,
  className,
  ...props
}: {
  type: HeadingTypes;
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <Type
      className={cn(
        twMerge("text-primary-foreground", classPerType[Type], className)
      )}
      {...props}
    />
  );
};
