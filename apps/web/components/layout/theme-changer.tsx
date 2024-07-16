"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  if (!hasMounted) return null;
  return theme === "dark" ? (
    <button onClick={() => setTheme("light")}>
      <MoonIcon />
    </button>
  ) : (
    <button onClick={() => setTheme("dark")}>
      <SunIcon />
    </button>
  );
};
