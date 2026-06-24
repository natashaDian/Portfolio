import ExperienceSection from "./experienceSection";
import HeroSection from "./heroSection";
import ProfileSection from "./profileSection";
import ProjectsSection from "./projectsSection";
import SideNavbar from "./sideNavbar";
import "animate.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#15111A]">
      <SideNavbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ProfileSection />
      </main>
    </div>
  );
}
