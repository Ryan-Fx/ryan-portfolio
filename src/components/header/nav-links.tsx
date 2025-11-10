import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function NavLinks() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex space-x-2 text-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          onClick={() => setActive(link.name)}
          className={cn(
            "text-gray-600 dark:text-gray-400 hover:text-fuchsia-500 md:hover:text-fuchsia-500 dark:hover:md:text-sky-500 py-2 px-4 rounded-full font-semibold transition duration-150 relative",
            {
              "md:text-fuchsia-500 dark:md:text-sky-500 text-fuchsia-500":
                active === link.name,
            }
          )}
        >
          {link.name}
          {link.name === active && (
            <motion.span
              layoutId="active"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="md:bg-gray-200 dark:md:bg-gray-700 absolute inset-0 -left-2 -right-2 rounded-full -z-10"
            ></motion.span>
          )}
        </Link>
      ))}
    </div>
  );
}
