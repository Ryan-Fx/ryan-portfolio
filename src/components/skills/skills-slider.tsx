import { FaGitAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import DrizzleLogo from "@/components/icons/drizzle-logo";

const skillsDataFrontend = [
  {
    id: 13,
    name: "HTML",
    tag: ["All", "Front End"],
    icon: <FaHtml5 className="size-12" />,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    tag: ["All", "Front End"],
    icon: <SiTailwindcss className="size-12" />,
  },
  {
    id: 3,
    name: "Typescript",
    tag: ["All", "Front End"],
    icon: <SiTypescript className="size-12" />,
  },
  {
    id: 4,
    name: "Next JS",
    tag: ["All", "Front End"],
    icon: <SiNextdotjs className="size-12" />,
  },

  {
    id: 9,
    name: "Git",
    tag: ["All", "Tools"],
    icon: <FaGitAlt className="size-12" />,
  },
  {
    id: 10,
    name: "GitHub",
    tag: ["All", "Tools"],
    icon: <FaGithub className="size-12" />,
  },
];

const skillsDataBackend = [
  {
    id: 6,
    name: "Prisma",
    tag: ["All", "Back End"],
    icon: <SiPrisma className="size-12" />,
  },
  {
    id: 8,
    name: "PostgreSQL",
    tag: ["All", "Back End"],
    icon: <SiPostgresql className="size-12" />,
  },
  {
    id: 9,
    name: "Drizzle",
    tag: ["All", "Back End"],
    icon: <DrizzleLogo className="size-12" />,
  },
  {
    id: 11,
    name: "MySQL",
    tag: ["All", "Back End"],
    icon: <GrMysql className="size-12" />,
  },
];
export default function SkillsSlider() {
  return (
    <>
      <InfiniteSlider gap={40} speed={120} speedOnHover={60}>
        {[
          ...skillsDataFrontend,
          ...skillsDataFrontend,
          ...skillsDataFrontend,
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {skill.icon}
            <span className="mt-2 text-sm ">{skill.name}</span>
          </div>
        ))}
      </InfiniteSlider>
      <InfiniteSlider gap={50} speed={100} speedOnHover={60}>
        {[
          ...skillsDataBackend,
          ...skillsDataBackend,
          ...skillsDataBackend,
          ...skillsDataBackend,
          ...skillsDataBackend,
        ].map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center font-semibold"
          >
            {skill.icon}
            <span className="ml-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </InfiniteSlider>
    </>
  );
}
