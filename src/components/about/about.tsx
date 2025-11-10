import AboutImage from "./about-image";
import AboutText from "./about-text";

export default function About() {
  return (
    <section className="scroll-mt-32 mt-28" id="about">
      <div className="md:flex justify-center mx-auto items-center md:px-10">
        <AboutImage />
        <AboutText />
      </div>
    </section>
  );
}
