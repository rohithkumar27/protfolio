"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SpaceRevolvingBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(119, 198, 255, 0.12) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 20, 0.8) 0%, rgba(0, 0, 40, 0.6) 50%, rgba(20, 0, 40, 0.8) 100%)
          `
        }}
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Rotating cosmic rings - Multiple layers */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Outermost rings - reduced sizes */}
        <motion.div
          className="absolute w-[150vw] h-[150vw] border border-blue-500/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[130vw] h-[130vw] border border-purple-500/4 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 350, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[110vw] h-[110vw] border border-cyan-500/6 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle rings */}
        <motion.div
          className="absolute w-[90vw] h-[90vw] border border-blue-400/8 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[70vw] h-[70vw] border border-purple-400/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[50vw] h-[50vw] border border-cyan-400/12 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner rings */}
        <motion.div
          className="absolute w-[40vw] h-[40vw] border border-blue-300/15 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[30vw] h-[30vw] border border-purple-300/18 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[20vw] h-[20vw] border border-cyan-300/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating cosmic debris */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`debris-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.cos(i * 0.5) * 200, 0],
            y: [0, Math.sin(i * 0.5) * 200, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 20 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Orbiting particles */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 30 + i * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.3
            }}
          >
            <motion.div
              className="w-2 h-2 bg-blue-400/40 rounded-full"
              style={{
                transform: `translateX(${60 + i * 15}px)`, // Reduced orbit radius
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Distant galaxies */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`galaxy-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            width: `${20 + i * 5}px`,
            height: `${20 + i * 5}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 100 + i * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div
            className="w-full h-full rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(${100 + i * 20}, ${150 + i * 10}, 255, 0.3) 0%, transparent 70%)`,
            }}
          />
          {/* Galaxy arms */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ 
              duration: 80 + i * 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300/15 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-60" />
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-120" />
          </motion.div>
        </motion.div>
      ))}

      {/* Pulsing cosmic energy */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-[100vw] h-[100vw] rounded-full" // Reduced from 150vw
          style={{
            background: "radial-gradient(circle, rgba(100, 150, 255, 0.05) 0%, rgba(150, 100, 255, 0.03) 30%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Nebula clouds */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(255, 100, 200, 0.2) 0%, rgba(100, 200, 255, 0.1) 50%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{
            background: "radial-gradient(ellipse, rgba(100, 255, 200, 0.15) 0%, rgba(200, 100, 255, 0.08) 50%, transparent 100%)",
            filter: "blur(50px)",
          }}
        />
      </motion.div>
      </div> {/* Close the overflow-hidden wrapper */}
    </div>
  );
};