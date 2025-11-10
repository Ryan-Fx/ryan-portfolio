"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
}

export function ProjectCard({ project }: { project: ProjectCardProps }) {
  const { title, description, image, gitUrl, previewUrl } = project;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="relative overflow-hidden group bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-gray-800 dark:to-gray-700 border border-cyan-500/10 hover:border-cyan-400/40 rounded-2xl transition-all duration-500 shadow-2xl dark:shadow-none shadow-slate-500/60">
        <CardContent className="p-5 flex flex-col space-y-4">
          {/* Gambar + Overlay */}
          <div className="relative overflow-hidden rounded-lg">
            {/* Gambar */}
            <Image
              src={image}
              width={500}
              height={300}
              alt={title}
              className="rounded-lg w-full object-cover aspect-auto transition-transform duration-700 group-hover:scale-125"
            />

            {/* Overlay redup saat hover */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-500" />

            {/* Tombol muncul dari bawah */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div
                className="
                  flex gap-4
                  translate-y-[400%]
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-400 text-black font-medium px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
                >
                  Live
                </a>
                <a
                  href={gitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Konten teks */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-300 leading-4 line-clamp-3">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
