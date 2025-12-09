import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { TypewriterText } from "./TypewriterText";

export const HeroSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "PHP",
    "Python",
    "Node.js",
    "React Native",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse animation-delay-1000" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Disponível para novos projetos
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Construo</span>{" "}
            <span className="text-gradient">experiências digitais</span>
            <br />
            <span className="text-foreground">modernas, rápidas e funcionais.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8"
          >
            Desenvolvedor Front-end & Web Fullstack especializado em criar
            interfaces intuitivas, sistemas escaláveis e soluções de alta
            performance.
          </motion.p>

          {/* Skills Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-mono text-sm md:text-base">
              <span className="text-primary">&lt;</span>
              <TypewriterText words={skills} />
              <span className="text-primary">/&gt;</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/portfolio">
              <motion.div
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x text-white font-semibold shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Portfólio
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            <Link to="/contato">
              <motion.div
                className="px-8 py-4 rounded-xl border-2 border-primary/60 bg-primary/10 font-semibold text-foreground hover:bg-primary/20 hover:border-primary transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Entrar em Contato
                <MessageCircle className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
