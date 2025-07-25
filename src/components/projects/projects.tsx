"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.2,
    },
  },
};

const projects = [
  { title: "Movie Explorer", description: "Search movies via TMDB API." },
  { title: "Weather Now", description: "Current weather using OpenWeather." },
  {
    title: "Neon Portfolio",
    description: "This portfolio site with futuristic style.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-cyan-400 tracking-wide">
          My Futuristic Projects
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
