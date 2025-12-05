import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Monitor, Smartphone, Globe, ShoppingCart, Zap } from "lucide-react";

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web Corporativo" },
  { id: "fullstack", label: "Aplicações Fullstack" },
  { id: "mobile", label: "Apps Mobile" },
  { id: "cms", label: "Sites com CMS" },
  { id: "landing", label: "Landing Pages" },
];

const projects = [
  {
    id: 1,
    title: "Sites Loopi Group",
    category: "landing",
    description: "Criação de hubs e landing pages modernas, performáticas e alinhadas à estratégia, com forte foco em conversão.",
    technologies: ["React", "Tailwind", "SEO", "Performance"],
    icon: Zap,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Tainacan – Senado Federal",
    category: "fullstack",
    description: "Sistema museológico personalizado, permitindo gestão eficiente e digitalização completa do acervo histórico.",
    technologies: ["PHP", "WordPress", "MySQL", "Tainacan"],
    icon: Monitor,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Instituto Bhava Dharma",
    category: "cms",
    description: "Site institucional claro, responsivo e otimizado, com identidade visual organizada e navegação fluida.",
    technologies: ["WordPress", "PHP", "CSS", "SEO"],
    icon: Globe,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 4,
    title: "World Ceram – Loja Virtual",
    category: "web",
    description: "Site responsivo com catálogo organizado, checkout prático e experiência otimizada para conversão.",
    technologies: ["E-commerce", "PHP", "MySQL", "Pagamentos"],
    icon: ShoppingCart,
    gradient: "from-rose-500 to-orange-600",
  },
  {
    id: 5,
    title: "Mangut – App de Receitas",
    category: "mobile",
    description: "Aplicativo moderno com receitas organizadas, filtros inteligentes e interface simples e intuitiva.",
    technologies: ["React Native", "Firebase", "API REST"],
    icon: Smartphone,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: 6,
    title: "BI Dashboard",
    category: "fullstack",
    description: "Dashboard interativo com métricas essenciais, visual limpo e insights rápidos para tomada de decisão.",
    technologies: ["Power BI", "SQL", "Python", "Analytics"],
    icon: Monitor,
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    id: 7,
    title: "Projetos Freelancers",
    category: "landing",
    description: "Desenvolvimento de landing pages responsivas e funcionais, integradas a serviços essenciais e SEO básico.",
    technologies: ["React", "Tailwind", "SEO", "Integrações"],
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 8,
    title: "Integrações Agendamentos & Pagamentos",
    category: "fullstack",
    description: "Soluções completas com reservas, pagamentos e automações integradas para melhorar fluxo operacional.",
    technologies: ["Node.js", "Stripe", "API REST", "Automação"],
    icon: Zap,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projetos que unem{" "}
            <span className="text-gradient">performance, design e tecnologia</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-primary text-primary-foreground glow-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl glass overflow-hidden hover-lift">
                {/* Project Preview */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <project.icon className="h-16 w-16 text-white/80" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full glass hover-glow"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full glass hover-glow"
                    >
                      <Github className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
