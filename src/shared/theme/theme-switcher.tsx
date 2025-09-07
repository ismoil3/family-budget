"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Palette, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";

const themes = [
  { name: "Default", value: "", color: "oklch(0.205 0 0)" },
  { name: "Red", value: "theme-red", color: "oklch(0.637 0.237 25.331)" },
  { name: "Orange", value: "theme-orange", color: "oklch(0.705 0.218 70.67)" },
  { name: "Amber", value: "theme-amber", color: "oklch(0.847 0.183 83.87)" },
  { name: "Yellow", value: "theme-yellow", color: "oklch(0.847 0.183 102.21)" },
  { name: "Lime", value: "theme-lime", color: "oklch(0.768 0.184 120.76)" },
  { name: "Green", value: "theme-green", color: "oklch(0.548 0.166 142.5)" },
  {
    name: "Emerald",
    value: "theme-emerald",
    color: "oklch(0.548 0.166 160.72)",
  },
  { name: "Teal", value: "theme-teal", color: "oklch(0.548 0.166 180.72)" },
  { name: "Cyan", value: "theme-cyan", color: "oklch(0.696 0.17 200.12)" },
  { name: "Sky", value: "theme-sky", color: "oklch(0.696 0.17 220.15)" },
  { name: "Blue", value: "theme-blue", color: "oklch(0.548 0.228 263.83)" },
  {
    name: "Indigo",
    value: "theme-indigo",
    color: "oklch(0.488 0.243 264.376)",
  },
  { name: "Violet", value: "theme-violet", color: "oklch(0.548 0.228 283.75)" },
  { name: "Purple", value: "theme-purple", color: "oklch(0.548 0.228 303.9)" },
  {
    name: "Fuchsia",
    value: "theme-fuchsia",
    color: "oklch(0.627 0.265 320.67)",
  },
  { name: "Pink", value: "theme-pink", color: "oklch(0.627 0.265 340.67)" },
  { name: "Rose", value: "theme-rose", color: "oklch(0.627 0.265 12.18)" },
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");

  const handleThemeChange = (themeValue: string) => {
    themes.forEach((theme) => {
      if (theme.value) {
        document.documentElement.classList.remove(theme.value);
      }
    });

    if (themeValue) {
      document.documentElement.classList.add(themeValue);
    }

    setCurrentTheme(themeValue);
    setIsOpen(false);
  };

  // let [theme , setTheme] = useState

  const currentThemeName =
    themes.find((theme) => theme.value === currentTheme)?.name || "Default";

  return (
    <div className="relative p-4 gap-2 items-center flex-col justify-center ">
      <div className="flex items-center gap-[4]">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="gap-2"
        >
          <Palette className="h-4 w-4" />
          {currentThemeName}
        </Button>
        <AnimatedThemeToggler />
      </div>

      <AnimatePresence>
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="mt-2"
          />
          {/* 
            <div className="flex">

                <p>Theme</p>
            </div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* <p>Testing</p> br */}
            <Card className="w-80 shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-sm">Темы</h3>
                <div className="grid grid-cols-3 gap-2">
                  {themes.map((theme, index) => (
                    <motion.button
                      key={theme.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                      onClick={() => handleThemeChange(theme.value)}
                      className="relative flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      {/* br */}
                      {/* br */}
                      <div
                        className="w-8 h-8 rounded-full border-2 border-border shadow-sm group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span className="text-xs font-medium">{theme.name}</span>

                      {currentTheme === theme.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-1 right-1"
                        >
                          <Check className="h-3 w-3 text-primary" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      </AnimatePresence>
    </div>
  );
}
