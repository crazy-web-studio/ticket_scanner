"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/lib/ui/button";

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" className="flex items-center gap-2 w-full h-12 text-base" onClick={toggleTheme}>
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      <span>{theme}</span>
    </Button>
  );
}
