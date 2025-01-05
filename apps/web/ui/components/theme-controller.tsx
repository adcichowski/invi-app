"use client";
import { useEffect, useState } from "react";
import { useTheme as useNextThemes } from "next-themes";
export const ThemeController = ({ children }: { children: JSX.Element }) => {
  const { theme } = useNextThemes();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    !hasMounted && setHasMounted(true);
  }, [hasMounted, theme]);

  if (!hasMounted) return null;
  return children;
};
