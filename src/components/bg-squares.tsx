"use client";

import { useTheme } from "next-themes";
import Squares from "./Squares/Squares";
// ganti ini sesuai lokasi Squares kamu

export function BackgroundSquares() {
  const { theme } = useTheme();

  const borderColor = theme === "dark" ? "#ffffff10" : "#ecf1f7";

  return (
    <div className="fixed inset-0 -z-50 h-full w-full pointer-events-none">
      <Squares
        speed={0.3}
        squareSize={50}
        direction="diagonal"
        borderColor={borderColor}
        hoverFillColor="#222"
      />
    </div>
  );
}
