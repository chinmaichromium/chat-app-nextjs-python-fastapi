"use client";

import { cn } from "@/lib/utils";
import { useThemeStore } from "../../stores/useThemeStore";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const theme = useThemeStore();
  return (
    <div
      className={cn(
        theme.baseMode,
        `theme-${defaultTheme || theme.baseColor}`,
        "w-full",
        className
      )}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : theme.baseRadius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
