import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "WebMaster",
    company: "Loopi Group",
    period: "2025 - Atual",
    description:
      "Desenvolvo, mantenho e aprimoro os sites da Loopi Group, implementando novas funcionalidades, otimizando performance e garantindo uma experiência de navegação moderna, estável e eficiente.",
    current: true,
  },
  {
    title: "Desenvolvedor Web Freelancer",
    company: "Autônomo",
    period: "2024 - 2025",
    description:
      "Desenvolvimento de sites completos e soluções web personalizadas, integrando sistemas de pagamento, autenticação, dashboards, SEO avançado e experiências fluidas.",
    current: false,
  },
  {
    title: "Estagiário Fullstack PHP",
    company: "Senado Federal",
    period: "2022 - 2024",
    description:
      "Desenvolvimento e implementação do sistema de gestão de acervo Tainacan. Atuei também no treinamento e capacitação de equipes internas para uso da ferramenta, garantindo eficiência e continuidade do projeto.",
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Experiência
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Minha <span className="text-gradient">trajetória profissional</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 pl-8 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                  exp.current
                    ? "bg-primary glow-primary"
                    : "bg-muted border-2 border-primary"
                }`}
              />

              {/* Content Card */}
              <div className="glass rounded-2xl p-6 hover-lift">
                <div
                  className={`flex items-center gap-2 mb-3 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.current && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                      Atual
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div
                  className={`flex items-center gap-2 mb-3 text-primary ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
