import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Wrench, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    text: "2+ anos desenvolvendo projetos reais",
  },
  {
    icon: Wrench,
    text: "Especialista em tecnologias front-end",
  },
  {
    icon: Rocket,
    text: "Experiência em projetos fullstack e mobile",
  },
  {
    icon: Users,
    text: "Perfil colaborativo e orientado a resultados",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Sobre Mim
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transformo ideias em{" "}
            <span className="text-gradient">produtos digitais reais.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-6 opacity-50" />
              <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center">
                <div className="text-8xl md:text-9xl font-bold text-gradient">
                  AP
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-primary/30 rounded-full border-dashed"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sou <span className="text-foreground font-semibold">Ary José Passos</span>, 
              Desenvolvedor Front-end Jr com experiência em criar interfaces modernas, 
              plataformas completas e sistemas integrados. Atuo com desenvolvimento web 
              e mobile, unindo design funcional, código limpo e foco total na experiência 
              do usuário.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Já trabalhei no <span className="text-foreground font-semibold">Senado Federal</span>, 
              desenvolvendo soluções de gestão robustas e treinando equipes internas, e hoje 
              atuo como desenvolvedor freelancer, construindo sites completos com pagamento, 
              autenticação, agendamento e alto desempenho.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Meu objetivo é continuar evoluindo como profissional, entregando soluções 
              tecnológicas que impactam pessoas e negócios.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl glass hover-lift"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
