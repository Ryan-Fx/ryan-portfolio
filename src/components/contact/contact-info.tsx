"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <div className="col-span-4 space-y-4">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="capitalize text-2xl md:text-4xl font-bold text-blue-500 dark:text-primary">
          let's get in touch
        </h1>
        <p>
          I'm always looking for opportunities to expand upon my skills and I'm
          currently seeking a full-time junior web developer position. I'd also
          love to hear from you if you have any questions, are looking to
          network, or would like to chat about any projects I can help with.
        </p>
      </motion.div>
    </div>
  );
}
