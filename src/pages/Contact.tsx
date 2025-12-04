import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Contact = () => {
  useTheme();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
