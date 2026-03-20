"use client";

import { useTheme } from "../ui/ThemeProvider";
import Aurora from "../ui/Aurora";

const DARK_STOPS  = ["#4f8fff", "#00c7e6", "#1e3a8a"]; // accent → brand-2 cyan → deep navy
const LIGHT_STOPS = ["#2f80ed", "#00b8d9", "#bfdbfe"]; // accent → brand-2 → pale blue

export default function HeroAurora() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Aurora
      colorStops={isDark ? DARK_STOPS : LIGHT_STOPS}
      amplitude={isDark ? 1.0 : 0.8}
      blend={isDark ? 0.5 : 0.35}
      speed={0.8}
    />
  );
}
