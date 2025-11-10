"use client";

import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./project-card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Movie Explorer",
    description:
      "Full-stack e-commerce built using Next.js, Tailwind CSS, Prisma, and PostgreSQL with modern responsive UI.",
    image: "/images/projects/ryanwatch.jpg",
    gitUrl: " https://github.com/Ryan-Fx/ryan-movie-explorer",
    previewUrl: " https://ryanwatch.vercel.app",
  },
  {
    id: 2,
    title: "Ecommerce Website (Ryan Store)",
    description:
      "Full-stack e-commerce built using Next.js, Tailwind CSS, Prisma, and PostgreSQL with modern responsive UI.",
    image: "/images/projects/store.jpg",
    gitUrl: "https://github.com/Ryan-Fx/ryan-e-commerce",
    previewUrl: "https://ryannn-store.vercel.app",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "Responsive personal portfolio built using Next.js, Tailwind CSS, Shadcn UI, and Framer Motion for animations.",
    image: "/images/projects/portfolio.jpg",
    gitUrl: "https://github.com/Ryan-Fx/ryan-portfolio-nextjs",
    previewUrl: "https://ryann-devv.vercel.app",
  },
  {
    id: 4,
    title: "Interior Website",
    description:
      "Modern interior design website using Next.js, Tailwind CSS, Framer Motion, and TypeScript.",
    image: "/images/projects/interriorweb.jpg",
    gitUrl: "https://github.com/Ryan-Fx/interior-website",
    previewUrl: "https://ryanfx-interior-website.vercel.app",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    description:
      "Responsive dashboard using Next.js, Tailwind CSS, and Framer Motion with animated charts and modern UI.",
    image: "/images/projects/dashboard.jpg",
    gitUrl: "https://github.com/Ryan-Fx/ryan-dashboard",
    previewUrl: "https://ryanfx-admin-dashboard.vercel.app",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <div>
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
          Projects
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
