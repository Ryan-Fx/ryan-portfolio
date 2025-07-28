"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website (Ryan Store)",
    description:
      "This full-stack application was built and developed using Next JS (React Framework), Tailwind CSS, Prisma and PostgreSQL.",
    image: "/images/projects/store.jpg",
    gitUrl: "https://github.com/Ryan-Fx/ryan-e-commerce",
    previewUrl: "https://ryannn-store.vercel.app",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "This full-stack application was built and developed using Next JS (React Framework), Tailwind CSS, Prisma and PostgreSQL. This portfolio uses responsive design so that its appearance will adjust to the user's screen size.",
    image: "/images/projects/portfolio.jpg",
    gitUrl: "https://github.com/Ryan-Fx/ryan-portfolio-nextjs",
    previewUrl: "https://ryann-devv.vercel.app",
  },
  {
    id: 3,
    title: "Interior Website",
    description:
      "This website was built and developed using Next JS (React Framework), Tailwind CSS, Framer Motion, TypeScript etc. This website uses responsive design so that its appearance will adjust to the user's screen size.",
    image: "/images/projects/interriorweb.jpg",
    gitUrl: "https://github.com/Ryan-Fx/interior-website",
    previewUrl: "https://ryanfx-interior-website.vercel.app",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    description:
      "This website was built and developed using Next JS (React Framework), Tailwind CSS, Framer Motion, TypeScript etc. This website uses responsive design so that its appearance will adjust to the user's screen size.",
    image: "/images/projects/dashboard.jpg",
    gitUrl: "https://github.com/Ryan-Fx/ryan-dashboard",
    previewUrl: "https://ryanfx-admin-dashboard.vercel.app",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.2,
    },
  },
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-36 mt-28">
      <div>
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
          My Futuristic Projects
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
