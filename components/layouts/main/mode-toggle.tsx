"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </Button>
      )}
    </div>
  );
};

export default ModeToggle;
