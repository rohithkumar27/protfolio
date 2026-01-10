"use client";

import { motion } from "framer-motion";

export const SimpleConstellation = () => {
  // Generate random star positions
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      animationDelay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
  };

  const stars = generateStars(100);
  const constellationStars = [
    // Big Dipper constellation
    { x: 20, y: 30, size: 4 },
    { x: 25, y: 25, size: 3 },
    { x: 30, y: 22, size: 4 },
    { x: 35, y: 24, size: 3 },
    { x: 40, y: 28, size: 4 },
    { x: 42, y: 35, size: 3 },
    { x: 38, y: 40, size: 4 },
    
    // Orion constellation
    { x: 70, y: 20, size: 4 },
    { x: 75, y: 25, size: 3 },
    { x: 80, y: 20, size: 4 },
    { x: 72, y: 35, size: 3 },
    { x: 75, y: 40, size: 4 },
    { x: 78, y: 35, size: 3 },
    { x: 73, y: 50, size: 4 },
    { x: 77, y: 55, size: 3 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Background stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.animationDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Constellation stars */}
      {constellationStars.map((star, index) => (
        <motion.div
          key={`constellation-${index}`}
          className="absolute bg-blue-200 rounded-full shadow-lg"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 3}px rgba(147, 197, 253, 0.8)`,
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Big Dipper lines */}
        <motion.line
          x1="20%" y1="30%" x2="25%" y2="25%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="25%" y1="25%" x2="30%" y2="22%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.line
          x1="30%" y1="22%" x2="35%" y2="24%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
        <motion.line
          x1="35%" y1="24%" x2="40%" y2="28%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.6 }}
        />
        <motion.line
          x1="40%" y1="28%" x2="42%" y2="35%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.8 }}
        />
        <motion.line
          x1="42%" y1="35%" x2="38%" y2="40%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 2 }}
        />

        {/* Orion lines */}
        <motion.line
          x1="70%" y1="20%" x2="75%" y2="25%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 2.5 }}
        />
        <motion.line
          x1="75%" y1="25%" x2="80%" y2="20%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 2.7 }}
        />
        <motion.line
          x1="70%" y1="20%" x2="72%" y2="35%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 2.9 }}
        />
        <motion.line
          x1="80%" y1="20%" x2="78%" y2="35%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 3.1 }}
        />
        <motion.line
          x1="72%" y1="35%" x2="75%" y2="40%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 3.3 }}
        />
        <motion.line
          x1="75%" y1="40%" x2="78%" y2="35%"
          stroke="rgba(147, 197, 253, 0.6)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 3.5 }}
        />
      </svg>

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
          }}
          initial={{
            x: "-10px",
            y: `${20 + i * 25}%`,
            opacity: 0,
          }}
          animate={{
            x: "110vw",
            y: `${30 + i * 25}%`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 2,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
        />
      ))}

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Content removed - just stars animation */}
      </div>
    </div>
  );
};