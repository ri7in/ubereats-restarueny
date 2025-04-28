import React from "react";
import { cn } from "@/lib/utils";

interface MinimalContainerProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "small" | "medium" | "large";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "p-0",
  small: "p-2 md:p-4",
  medium: "p-4 md:p-6",
  large: "p-6 md:p-8",
};

export function MinimalContainer({
  children,
  className,
  padding = "medium",
  maxWidth = "lg",
}: MinimalContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto bg-background rounded-md",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
