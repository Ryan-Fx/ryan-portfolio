"use client";

import { easeOut, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const cardVariants = {
  hidden: { y: 60 },
  show: {
    y: 0,

    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="w-full md:w-[300px] rounded-xl transition-all duration-300"
    >
      <Card className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-110 transition-all duration-300">
        <CardContent className="p-6 text-white">
          <h3 className="text-lg font-bold mb-2 tracking-wide">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
