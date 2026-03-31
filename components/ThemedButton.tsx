"use client";
import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function emptySubscribe() {
  return () => {};
}

export function ThemedButton() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return <PhSunBold />;
  }

  return (
    <button
      type="button"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <PhMoonFill /> : <PhSunBold />}
    </button>
  );
}
