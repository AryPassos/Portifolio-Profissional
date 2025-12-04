import { Navigation } from "@/components/Navigation";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Experience = () => {
  useTheme();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  );
};

export default Experience;
