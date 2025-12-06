import { Navbar } from "../components/Navbar";
import { MinimalistBackground } from "@/components/MinimalistBackground";
import { SectionCard } from "@/components/SectionCard";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationSection } from "../components/EducationSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <MinimalistBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <div className="pt-20">
          <HomeSection />
        </div>
        <div className="py-3 space-y-8">
          <SectionCard>
            <AboutSection />
          </SectionCard>
          <SectionCard>
            <SkillsSection />
          </SectionCard>
          <SectionCard>
            <ProjectsSection />
          </SectionCard>
          <SectionCard>
            <EducationSection />
          </SectionCard>
          <SectionCard>
            <AchievementsSection />
          </SectionCard>
          <SectionCard>
            <CertificationsSection />
          </SectionCard>

          {/* Contact section removed as per request; contact info moved to Footer */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
