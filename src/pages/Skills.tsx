import { Navigation } from "@/components/Navigation";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Skills = () => {
  useTheme();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Skills;
