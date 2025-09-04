"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="md:w-1/2 overflow-hidden h-[500px] flex justify-center items-center ">
      <motion.div
        className="overflow-hidden"
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
          alt="Picture of the author"
          className=" rounded-bl-[220px] rounded-br-[220px] transition duration-1000 grayscale hover:grayscale-0 cursor-pointer"
        />
      </motion.div>
    </div>
  );
}
