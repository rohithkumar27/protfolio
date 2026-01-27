"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SpaceRevolvingBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });
      setIsMobile(width < 768);
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  // Reduce animation complexity on mobile
  const animationDuration = isMobile ? 120 : 60;
  const particleCount = isMobile ? 8 : 20;
  const orbitCount = isMobile ? 6 : 12;
  const galaxyCount = isMobile ? 3 : 6;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 119, 198, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(119, 198, 255, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 20, 0.6) 0%, rgba(0, 0, 40, 0.4) 50%, rgba(20, 0, 40, 0.6) 100%)
          `
        }}
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ 
          duration: animationDuration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Rotating cosmic rings - Mobile optimized */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Reduced ring count and sizes for mobile */}
        <motion.div
          className={`absolute ${isMobile ? 'w-[120vw] h-[120vw]' : 'w-[150vw] h-[150vw]'} border border-blue-500/3 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: isMobile ? 200 : 400, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute ${isMobile ? 'w-[100vw] h-[100vw]' : 'w-[130vw] h-[130vw]'} border border-purple-500/3 rounded-full`}
          animate={{ rotate: -360 }}
          transition={{ duration: isMobile ? 175 : 350, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute ${isMobile ? 'w-[80vw] h-[80vw]' : 'w-[110vw] h-[110vw]'} border border-cyan-500/4 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: isMobile ? 150 : 300, repeat: Infinity, ease: "linear" }}
        />

        {!isMobile && (
          <>
            {/* Additional rings only on desktop */}
            <motion.div
              className="absolute w-[90vw] h-[90vw] border border-blue-400/6 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[70vw] h-[70vw] border border-purple-400/8 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[50vw] h-[50vw] border border-cyan-400/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}

        {/* Inner rings - simplified for mobile */}
        <motion.div
          className={`absolute ${isMobile ? 'w-[30vw] h-[30vw]' : 'w-[40vw] h-[40vw]'} border border-blue-300/12 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: isMobile ? 60 : 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute ${isMobile ? 'w-[20vw] h-[20vw]' : 'w-[30vw] h-[30vw]'} border border-purple-300/15 rounded-full`}
          animate={{ rotate: -360 }}
          transition={{ duration: isMobile ? 45 : 90, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating cosmic debris - reduced count on mobile */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`debris-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.cos(i * 0.5) * (isMobile ? 100 : 200), 0],
            y: [0, Math.sin(i * 0.5) * (isMobile ? 100 : 200), 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: (isMobile ? 15 : 20) + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Mobile-specific twinkling stars */}
      {isMobile && [...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mobile-specific drifting stars */}
      {isMobile && [...Array(8)].map((_, i) => (
        <motion.div
          key={`drift-star-${i}`}
          className="absolute w-1 h-1 bg-blue-200/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.cos(i) * 50, 0],
            y: [0, Math.sin(i) * 30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Orbiting particles - reduced on mobile */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {[...Array(orbitCount)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: (isMobile ? 20 : 30) + i * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.3
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400/30 rounded-full"
              style={{
                transform: `translateX(${(isMobile ? 40 : 60) + i * (isMobile ? 10 : 15)}px)`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.6, 0.2],
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

      {/* Distant galaxies - reduced on mobile */}
      {[...Array(galaxyCount)].map((_, i) => (
        <motion.div
          key={`galaxy-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            width: `${(isMobile ? 15 : 20) + i * 5}px`,
            height: `${(isMobile ? 15 : 20) + i * 5}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: (isMobile ? 60 : 100) + i * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <div
            className="w-full h-full rounded-full opacity-15"
            style={{
              background: `radial-gradient(circle, rgba(${100 + i * 20}, ${150 + i * 10}, 255, 0.2) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Pulsing cosmic energy - simplified on mobile */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: isMobile ? 12 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className={`${isMobile ? 'w-[80vw] h-[80vw]' : 'w-[100vw] h-[100vw]'} rounded-full`}
          style={{
            background: "radial-gradient(circle, rgba(100, 150, 255, 0.03) 0%, rgba(150, 100, 255, 0.02) 30%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Nebula clouds - simplified on mobile */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute inset-0"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full opacity-8"
              style={{
                background: "radial-gradient(ellipse, rgba(255, 100, 200, 0.1) 0%, rgba(100, 200, 255, 0.05) 50%, transparent 100%)",
                filter: "blur(30px)",
              }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            animate={{
              x: [0, -25, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute bottom-1/4 right-1/4 w-50 h-50 rounded-full opacity-6"
              style={{
                background: "radial-gradient(ellipse, rgba(100, 255, 200, 0.08) 0%, rgba(200, 100, 255, 0.04) 50%, transparent 100%)",
                filter: "blur(40px)",
              }}
            />
          </motion.div>
        </>
      )}
      </div>
    </div>
  );
};