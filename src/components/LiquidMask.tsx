import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import avatarImage from "@/assets/avatar-ary.png";

export const LiquidMask = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Movimento do glow - mais amplo
    mouseX.set((e.clientX - centerX) * 0.15);
    mouseY.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-80 h-80 md:w-96 md:h-96"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG Filters para fumaça */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="smoke-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="5"
              seed="5"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.008;0.012;0.008"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="40"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="3" />
          </filter>
          
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background glow - move com o mouse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl"
        style={{
          x,
          y,
        }}
        animate={{
          scale: isHovering ? 1.15 : 1,
          opacity: isHovering ? 0.7 : 0.4,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Borda com gradiente */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1">
        <div className="w-full h-full rounded-full bg-background" />
      </div>

      {/* Container da foto - estático */}
      <div className="absolute inset-2 md:inset-3 rounded-full overflow-hidden">
        <img
          src={avatarImage}
          alt="Ary José Passos - Desenvolvedor Web"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Camada de fumaça 1 - mais densa */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        style={{ filter: "url(#smoke-filter)" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-accent/30"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Camada de fumaça 2 - mais leve e em movimento */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none mix-blend-screen"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"
          style={{ filter: "url(#smoke-filter)" }}
        />
      </motion.div>

      {/* Camada de fumaça 3 - partículas flutuantes */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-gradient-radial from-primary/30 to-transparent blur-xl"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 40}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Brilho no topo */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"
        animate={{
          opacity: isHovering ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Partículas externas */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
          style={{
            left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 5)}%`,
            top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 5)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
