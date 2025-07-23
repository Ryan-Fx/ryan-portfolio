import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className=" h-[200vh] space-y-10 mt-5 p-5 lg:p-10">
      <Hero />
      <About />
    </main>
  );
}
