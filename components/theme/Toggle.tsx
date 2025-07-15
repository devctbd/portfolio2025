"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="dark:text-white h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="dark:text-white h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
  );
}
