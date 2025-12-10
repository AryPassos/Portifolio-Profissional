import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Smartphone,
  Layout,
  Database,
  GitBranch,
  Kanban,
} from "lucide-react";

const skillCategories = [
  {
    title: "Front-end",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "Angular",
      "Tailwind",
      "Bootstrap",
      "SASS/SCSS",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Back-end",
    icon: Server,
    skills: ["PHP", "Python", "Node.js", "Java", "C++"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Flutter (básico)"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "CMS",
    icon: Layout,
    skills: [
      "WordPress",
      "Webflow",
      "Shopify",
      "Wix Studio",
      "Squarespace",
      "BigCommerce",
    ],
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Ferramentas",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "Figma", "Power BI", "Docker", "Postman"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Metodologias",
    icon: Kanban,
    skills: ["Scrum", "Kanban", "Agile", "CI/CD", "Design Thinking"],
    color: "from-yellow-500 to-green-500",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Habilidades
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tecnologias que utilizo para{" "}
            <span className="text-gradient">construir soluções</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para construir plataformas
            completas, escaláveis e pensadas para pessoas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl glass hover-lift overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-tag border border-tag-border text-tag-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
