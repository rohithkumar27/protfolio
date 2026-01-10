"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  constellation?: boolean;
}

interface Constellation {
  stars: { x: number; y: number }[];
  connections: { from: number; to: number }[];
}

export const SpaceConstellation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const constellationsRef = useRef<Constellation[]>([]);

  // Create constellation patterns
  const createConstellations = (width: number, height: number): Constellation[] => {
    return [
      // Big Dipper-like constellation
      {
        stars: [
          { x: width * 0.2, y: height * 0.3 },
          { x: width * 0.25, y: height * 0.25 },
          { x: width * 0.3, y: height * 0.22 },
          { x: width * 0.35, y: height * 0.24 },
          { x: width * 0.4, y: height * 0.28 },
          { x: width * 0.42, y: height * 0.35 },
          { x: width * 0.38, y: height * 0.4 },
        ],
        connections: [
          { from: 0, to: 1 },
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4 },
          { from: 4, to: 5 },
          { from: 5, to: 6 },
        ],
      },
      // Orion-like constellation
      {
        stars: [
          { x: width * 0.7, y: height * 0.2 },
          { x: width * 0.75, y: height * 0.25 },
          { x: width * 0.8, y: height * 0.2 },
          { x: width * 0.72, y: height * 0.35 },
          { x: width * 0.75, y: height * 0.4 },
          { x: width * 0.78, y: height * 0.35 },
          { x: width * 0.73, y: height * 0.5 },
          { x: width * 0.77, y: height * 0.55 },
        ],
        connections: [
          { from: 0, to: 1 },
          { from: 1, to: 2 },
          { from: 0, to: 3 },
          { from: 2, to: 5 },
          { from: 3, to: 4 },
          { from: 4, to: 5 },
          { from: 4, to: 6 },
          { from: 5, to: 7 },
        ],
      },
      // Small triangle constellation
      {
        stars: [
          { x: width * 0.15, y: height * 0.7 },
          { x: width * 0.2, y: height * 0.75 },
          { x: width * 0.25, y: height * 0.7 },
        ],
        connections: [
          { from: 0, to: 1 },
          { from: 1, to: 2 },
          { from: 2, to: 0 },
        ],
      },
    ];
  };

  // Generate random background stars
  const generateStars = (width: number, height: number, count: number): Star[] => {
    const stars: Star[] = [];
    
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        constellation: false,
      });
    }
    
    return stars;
  };

  // Add constellation stars
  const addConstellationStars = (stars: Star[], constellations: Constellation[]): Star[] => {
    const allStars = [...stars];
    
    constellations.forEach((constellation) => {
      constellation.stars.forEach((star) => {
        allStars.push({
          x: star.x,
          y: star.y,
          size: Math.random() * 1.5 + 2,
          opacity: Math.random() * 0.3 + 0.7,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          constellation: true,
        });
      });
    });
    
    return allStars;
  };

  // Draw constellation lines
  const drawConstellationLines = (
    ctx: CanvasRenderingContext2D,
    constellations: Constellation[],
    time: number
  ) => {
    constellations.forEach((constellation) => {
      constellation.connections.forEach(({ from, to }) => {
        const starFrom = constellation.stars[from];
        const starTo = constellation.stars[to];
        
        if (starFrom && starTo) {
          const opacity = 0.3 + Math.sin(time * 0.001) * 0.1;
          ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(starFrom.x, starFrom.y);
          ctx.lineTo(starTo.x, starTo.y);
          ctx.stroke();
        }
      });
    });
  };

  // Draw stars
  const drawStars = (ctx: CanvasRenderingContext2D, stars: Star[], time: number) => {
    stars.forEach((star) => {
      const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
      const opacity = star.opacity * twinkle;
      
      if (star.constellation) {
        // Constellation stars - brighter and with glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `rgba(150, 200, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 150, 255, ${opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(100, 150, 255, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core star
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Background stars
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  // Animation loop
  const animate = (time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas with dark space background
    ctx.fillStyle = "rgba(5, 10, 20, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw constellation lines first (behind stars)
    drawConstellationLines(ctx, constellationsRef.current, time);
    
    // Draw stars
    drawStars(ctx, starsRef.current, time);

    animationRef.current = requestAnimationFrame(animate);
  };

  // Initialize canvas and stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }

      // Generate constellations and stars
      constellationsRef.current = createConstellations(rect.width, rect.height);
      const backgroundStars = generateStars(rect.width, rect.height, 150);
      starsRef.current = addConstellationStars(backgroundStars, constellationsRef.current);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(to bottom, #050a14, #0a1428)" }}
      />
      
      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-transparent"
          >
            Exploring the Digital Universe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Building scalable systems and AI applications across the vast expanse of technology
          </motion.p>
        </motion.div>
      </div>
      
      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: -10,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight * 0.5 : 100,
              opacity: 0,
            }}
            animate={{
              x: typeof window !== 'undefined' ? window.innerWidth + 10 : 1000,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight * 0.5 + window.innerHeight * 0.3 : 300,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "linear",
            }}
            style={{
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>
    </div>
  );
};