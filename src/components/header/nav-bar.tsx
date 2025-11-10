"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./nav-links";
import { ModeToggle } from "../mode-toggle";
import { GiBatMask } from "react-icons/gi";

export default function AnimatedNavbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // === Tahapan lebar (2 tahap) ===
  const baseWidth = useTransform(scrollY, [0, 500, 600], ["70%", "60%", "40%"]);

  // === Tinggi navbar ===
  const baseHeight = useTransform(scrollY, [0, 400], ["4rem", "3.5rem"]);

  // === Spring untuk efek kelenturan halus ===
  const springWidth = useSpring(baseWidth, {
    stiffness: 120, // semakin tinggi = lebih cepat responsnya
    damping: 18, // semakin tinggi = lebih sedikit goyang
    mass: 0.4, // pengaruh inertia
  });

  const springHeight = useSpring(baseHeight, {
    stiffness: 160,
    damping: 20,
    mass: 0.4,
  });

  return (
    <div className="w-full flex justify-center z-50 pointer-events-none">
      <motion.nav
        style={{
          width: springWidth,
          height: springHeight,
        }}
        className={`pointer-events-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full mt-4 flex items-center justify-between px-6 ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div>
          <GiBatMask className="size-7 text-sky-500 dark:text-red-400" />
        </div>

        <div className="gap-6">
          <NavLinks />
        </div>

        <ModeToggle />
      </motion.nav>
    </div>
  );
}
