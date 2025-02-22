import AboutSection from "@/components/aboutSection";
import CustomerLogoSection from "@/components/customerLogoSection";
import HomeHeader from "@/components/homeHeader";
import ProjectsSection from "@/components/projectsSection";
import SkillSection from "@/components/skillSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-28">
        <HomeHeader />
        <AboutSection />
        <CustomerLogoSection />
        <ProjectsSection />
        <SkillSection />
      </div>
    </>
  );
}
