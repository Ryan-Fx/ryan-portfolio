import SkillsSlider from "./skills-slider";

export default function Skills() {
  return (
    <section className="space-y-12 scroll-mt-36 mt-32" id="skills">
      <h1 className="text-5xl font-semibold text-center">Skills</h1>
      <div className="cursor-pointer space-y-5">
        <SkillsSlider />
      </div>
    </section>
  );
}
