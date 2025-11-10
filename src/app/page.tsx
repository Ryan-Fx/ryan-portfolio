import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";

import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="space-y-10 px-8 lg:px-28">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
