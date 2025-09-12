import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];
export default function MobileNavLinks() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex flex-col space-y-4 text-xl text-center pt-10">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          onClick={() => setActive(link.name)}
          className={cn("font-semibold", {
            "md:text-fuchsia-500 dark:md:text-sky-500 text-fuchsia-500":
              active === link.name,
          })}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
