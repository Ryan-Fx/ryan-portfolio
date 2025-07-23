"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Warna bar (merah → kuning → hijau)
  const color = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["#3b82f6", "#a855f7", "#ec4899"]
  );

  // Efek glow mengikuti warna utama
  // const boxShadow = useTransform(
  //   color,
  //   (c) => `0 0 12px ${c}, 0 0 24px ${c}, 0 0 36px ${c}`
  // );

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-30 origin-left"
      style={{
        scaleX: smoothProgress,
        backgroundColor: color,
        // boxShadow: boxShadow,
      }}
    />
  );
}
