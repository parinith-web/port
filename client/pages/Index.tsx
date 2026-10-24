import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitySection from "@/components/ActivitySection";
import Hero from "@/components/Hero";

export default function Index() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-0 sm:px-10 lg:relative lg:px-[73px]">
      <SkillsSection />
      <ProjectsSection />
      <ActivitySection />
      </div>
    </>
  );
}
