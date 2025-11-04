"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutImage() {
  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="md:w-1/2 overflow-hidden h-[500px] flex justify-center items-center"
    >
      <motion.div
        className="overflow-hidden rounded-xl"
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 6,
        }}
      >
        <Image
          src="/images/ryan.jpg"
          width={350}
          height={350}
          alt="Ryan - Web Developer"
          className="
            rounded-xl
            transition duration-1000
            cursor-pointer
            shadow-lg
            hover:shadow-[0_0_50px_10px_rgba(59,130,246,0.6)]
            dark:shadow-[0_0_20px_rgba(255,255,255,0.08)]
            dark:hover:shadow-[0_0_40px_15px_rgba(59,130,246,0.45)]
          "
        />
      </motion.div>
    </motion.div>
  );
}
