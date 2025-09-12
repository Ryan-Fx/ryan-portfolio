// lib/animations.ts
import { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

export function fadeIn(
  direction: Direction = "up",
  delay: number = 0
): Variants {
  const x = direction === "left" ? 60 : direction === "right" ? -60 : 0;
  const y = direction === "up" ? 60 : direction === "down" ? -60 : 0;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}
