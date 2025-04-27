"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeScript() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "system";
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  }, [setTheme, theme]);

  return null;
}
