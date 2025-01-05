"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
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
