"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="inline-block">
      {theme === "dark" ? (
        <Sun onClick={() => setTheme("light")} className="text-white" />
      ) : (
        <Moon onClick={() => setTheme("dark")} className=" fill-black" />
      )}
    </button>
  );
};

export default ModeToggle;
