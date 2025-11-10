"use client";
import { motion } from "framer-motion";
import Introduce from "./introduce";
import MaskedDivHero from "./masked-div-hero";
import HeroSpline from "./hero-spline";

export default function Hero() {
  return (
    <section id="home" className="mt-44 scroll-mt-44">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:flex space-y-4 md:space-y-0 md:space-x-4 justify-center items-center gap-4"
      >
        <Introduce />
        {/* <MaskedDivHero /> */}
        <HeroSpline />
      </motion.div>
    </section>
  );
}
