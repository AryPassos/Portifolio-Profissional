import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import avatarImage from "@/assets/avatar-ary.png";

export const LiquidMask = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const [turbulenceSeed, setTurbulenceSeed] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTurbulenceSeed(prev => (prev % 10) + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-80 h-80 md:w-96 md:h-96 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG Filters */}
      <svg className="absolute w-0 h-0">
        <defs>
          {/* Liquid distortion filter */}
          <filter id="liquid-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              seed={turbulenceSeed}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovering ? 30 : 15}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          
          {/* Glow filter */}
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Blob mask shape */}
          <clipPath id="blob-clip">
            <motion.ellipse
              cx="50%"
              cy="50%"
              rx="45%"
              ry="45%"
              style={{
                translateX: x,
                translateY: y,
              }}
            />
          </clipPath>
        </defs>
      </svg>

      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl"
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Outer liquid border */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          filter: "url(#liquid-filter)",
        }}
        animate={{
          scale: isHovering ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner container with image */}
      <motion.div
        className="absolute inset-2 md:inset-3 rounded-full overflow-hidden"
        style={{
          filter: "url(#liquid-filter)",
        }}
      >
        {/* Liquid overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay z-10"
          style={{
            translateX: x,
            translateY: y,
          }}
        />
        
        {/* Avatar image */}
        <motion.img
          src={avatarImage}
          alt="Ary José Passos - Desenvolvedor Web"
          className="w-full h-full object-cover"
          style={{
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Liquid shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          style={{
            translateX: x,
            translateY: y,
          }}
        />
      </motion.div>

      {/* Floating particles around the mask */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          style={{
            left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
            top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 6)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            x: isHovering ? [0, Math.random() * 10 - 5, 0] : 0,
            y: isHovering ? [0, Math.random() * 10 - 5, 0] : 0,
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Custom cursor when hovering */}
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-primary/60 mix-blend-difference z-50"
          style={{
            x: x,
            y: y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </div>
  );
};
