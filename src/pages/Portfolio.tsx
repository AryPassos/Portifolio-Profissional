import { Navigation } from "@/components/Navigation";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Portfolio = () => {
  useTheme();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  );
};

export default Portfolio;
