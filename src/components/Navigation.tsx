import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Habilidades", href: "/habilidades" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav 
        className={`max-w-6xl mx-auto rounded-2xl px-6 py-3 transition-all duration-500 ${
          scrolled 
            ? "glass-strong shadow-2xl shadow-primary/10 border border-primary/10" 
            : "glass border border-border/30"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                className="relative"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <span className="text-xl font-bold text-gradient">
                Ary Passos
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group"
                >
                  {/* Background glow effect */}
                  <motion.span
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? "bg-primary/15 shadow-lg shadow-primary/20"
                        : "bg-transparent group-hover:bg-primary/10"
                    }`}
                    layoutId="navBackground"
                  />
                  
                  {/* Text */}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active indicator dot */}
                  <motion.span
                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary transition-all duration-300 ${
                      location.pathname === item.href 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Separator */}
            <div className="w-px h-6 bg-border/50 mx-3" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-xl glass border border-border/30 overflow-hidden group"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <motion.div 
                className="flex flex-col gap-1 pb-2 pt-2 border-t border-border/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/10 shadow-lg shadow-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <motion.span
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          location.pathname === item.href 
                            ? "bg-primary" 
                            : "bg-muted-foreground/30"
                        }`}
                        animate={location.pathname === item.href ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
