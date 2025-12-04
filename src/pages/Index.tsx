import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  useTheme();

  useEffect(() => {
    document.title = "Ary José Passos | Desenvolvedor Front-end & Fullstack";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Desenvolvedor Front-end & Web Fullstack especializado em criar interfaces intuitivas, sistemas escaláveis e soluções de alta performance."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Footer />
    </main>
  );
};

export default Index;
