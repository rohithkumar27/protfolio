"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

interface ConstellationStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface Constellation {
  id: number;
  stars: ConstellationStar[];
  connections: { from: number; to: number }[];
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  scale: number;
}

export const ShootingStarsBackground = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const [constellations, setConstellations] = useState<Constellation[]>([]);
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

  useEffect(() => {
    if (windowSize.width === 0) return;

    const generateShootingStars = () => {
      const newStars: ShootingStar[] = [];
      
      // Generate 8 shooting stars with different patterns
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI / 3 + Math.PI / 6; // 30-60 degrees
        const startX = Math.random() * windowSize.width * 0.3; // Start from left side
        const startY = Math.random() * windowSize.height * 0.6 + windowSize.height * 0.1; // Avoid very top/bottom
        
        const distance = windowSize.width * 0.8 + Math.random() * windowSize.width * 0.4;
        const endX = startX + Math.cos(angle) * distance;
        const endY = startY + Math.sin(angle) * distance;

        newStars.push({
          id: i,
          startX,
          startY,
          endX,
          endY,
          duration: 2 + Math.random() * 2, // 2-4 seconds
          delay: Math.random() * 10, // 0-10 seconds initial delay
          size: Math.random() * 2 + 1, // 1-3px
          opacity: Math.random() * 0.6 + 0.4, // 0.4-1.0
        });
      }
      
      setStars(newStars);
    };

    const generateConstellations = () => {
      const newConstellations: Constellation[] = [];

      // Big Dipper constellation
      const bigDipper: Constellation = {
        id: 1,
        stars: [
          { x: 0, y: 30, size: 2, opacity: 0.8 },
          { x: 20, y: 20, size: 1.5, opacity: 0.7 },
          { x: 40, y: 15, size: 2, opacity: 0.9 },
          { x: 60, y: 18, size: 1.8, opacity: 0.8 },
          { x: 80, y: 25, size: 2.2, opacity: 0.85 },
          { x: 90, y: 40, size: 1.6, opacity: 0.75 },
          { x: 75, y: 55, size: 2, opacity: 0.8 },
        ],
        connections: [
          { from: 0, to: 1 },
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4 },
          { from: 4, to: 5 },
          { from: 5, to: 6 },
        ],
        startX: -150,
        startY: windowSize.height * 0.2,
        endX: windowSize.width + 150,
        endY: windowSize.height * 0.3,
        duration: 120, // 2 minutes to cross screen
        delay: 0,
        scale: 1,
      };

      // Orion constellation
      const orion: Constellation = {
        id: 2,
        stars: [
          { x: 20, y: 0, size: 2.2, opacity: 0.9 },
          { x: 40, y: 10, size: 1.8, opacity: 0.8 },
          { x: 60, y: 0, size: 2, opacity: 0.85 },
          { x: 25, y: 35, size: 1.6, opacity: 0.75 },
          { x: 40, y: 45, size: 2.5, opacity: 0.95 }, // Orion's belt center
          { x: 55, y: 35, size: 1.8, opacity: 0.8 },
          { x: 30, y: 70, size: 2, opacity: 0.8 },
          { x: 50, y: 80, size: 1.7, opacity: 0.75 },
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
        startX: windowSize.width + 100,
        startY: windowSize.height * 0.4,
        endX: -200,
        endY: windowSize.height * 0.5,
        duration: 150, // 2.5 minutes
        delay: 30, // Start after 30 seconds
        scale: 0.8,
      };

      // Cassiopeia (W-shaped)
      const cassiopeia: Constellation = {
        id: 3,
        stars: [
          { x: 0, y: 20, size: 1.8, opacity: 0.8 },
          { x: 25, y: 0, size: 2, opacity: 0.85 },
          { x: 50, y: 15, size: 2.2, opacity: 0.9 },
          { x: 75, y: 0, size: 1.9, opacity: 0.8 },
          { x: 100, y: 25, size: 1.7, opacity: 0.75 },
        ],
        connections: [
          { from: 0, to: 1 },
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4 },
        ],
        startX: -120,
        startY: windowSize.height * 0.7,
        endX: windowSize.width + 120,
        endY: windowSize.height * 0.6,
        duration: 100, // Faster movement
        delay: 60, // Start after 1 minute
        scale: 0.6,
      };

      newConstellations.push(bigDipper, orion, cassiopeia);
      setConstellations(newConstellations);
    };

    generateShootingStars();
    generateConstellations();
  }, [windowSize]);

  const ShootingStar = ({ star }: { star: ShootingStar }) => {
    return (
      <motion.div
        key={star.id}
        className="absolute pointer-events-none"
        initial={{
          x: star.startX,
          y: star.startY,
          opacity: 0,
        }}
        animate={{
          x: star.endX,
          y: star.endY,
          opacity: [0, star.opacity, star.opacity, 0],
        }}
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          repeatDelay: 8 + Math.random() * 12, // 8-20 seconds between repeats
          ease: "easeOut",
        }}
      >
        {/* Main shooting star */}
        <div
          className="bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.8)`,
          }}
        />
        
        {/* Tail effect */}
        <motion.div
          className="absolute top-0 left-0 bg-gradient-to-r from-white to-transparent rounded-full"
          style={{
            width: `${star.size * 20}px`,
            height: `${star.size * 0.5}px`,
            transformOrigin: "left center",
            transform: `rotate(${Math.atan2(star.endY - star.startY, star.endX - star.startX)}rad)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, star.opacity * 0.6, star.opacity * 0.6, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 8 + Math.random() * 12,
            ease: "easeOut",
          }}
        />
      </motion.div>
    );
  };

  const MovingConstellation = ({ constellation }: { constellation: Constellation }) => {
    return (
      <motion.div
        key={constellation.id}
        className="absolute pointer-events-none"
        initial={{
          x: constellation.startX,
          y: constellation.startY,
          scale: constellation.scale,
          opacity: 0,
        }}
        animate={{
          x: constellation.endX,
          y: constellation.endY,
          scale: constellation.scale,
          opacity: [0, 0.6, 0.6, 0],
        }}
        transition={{
          duration: constellation.duration,
          delay: constellation.delay,
          repeat: Infinity,
          repeatDelay: 20, // 20 seconds between constellation cycles
          ease: "linear",
        }}
      >
        {/* Constellation stars */}
        {constellation.stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute bg-blue-200 rounded-full"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 3}px rgba(147, 197, 253, 0.8)`,
            }}
            animate={{
              opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.7],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '120px', height: '100px' }}>
          {constellation.connections.map((connection, index) => {
            const fromStar = constellation.stars[connection.from];
            const toStar = constellation.stars[connection.to];
            return (
              <motion.line
                key={index}
                x1={fromStar.x}
                y1={fromStar.y}
                x2={toStar.x}
                y2={toStar.y}
                stroke="rgba(147, 197, 253, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.4, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            );
          })}
        </svg>
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background twinkling stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Moving constellations */}
      {constellations.map((constellation) => (
        <MovingConstellation key={constellation.id} constellation={constellation} />
      ))}

      {/* Shooting stars */}
      {stars.map((star) => (
        <ShootingStar key={star.id} star={star} />
      ))}

      {/* Additional random shooting stars */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`random-${i}`}
          className="absolute pointer-events-none"
          initial={{
            x: -20,
            y: Math.random() * windowSize.height,
            opacity: 0,
          }}
          animate={{
            x: windowSize.width + 20,
            y: Math.random() * windowSize.height * 0.3 + windowSize.height * 0.2,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 5 + 2,
            repeat: Infinity,
            repeatDelay: 15,
            ease: "linear",
          }}
        >
          <div
            className="bg-blue-200 rounded-full"
            style={{
              width: "2px",
              height: "2px",
              boxShadow: "0 0 8px rgba(147, 197, 253, 0.8)",
            }}
          />
          <div
            className="absolute top-0 left-0 bg-gradient-to-r from-blue-200 to-transparent rounded-full"
            style={{
              width: "30px",
              height: "1px",
              transformOrigin: "left center",
            }}
          />
        </motion.div>
      ))}

      {/* Meteor shower effect (occasional) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`meteor-${i}`}
            className="absolute pointer-events-none"
            initial={{
              x: Math.random() * windowSize.width * 0.2,
              y: -20,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * windowSize.width * 0.2 + windowSize.width * 0.6,
              y: windowSize.height + 20,
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3 + 30, // Start after 30 seconds
              repeat: Infinity,
              repeatDelay: 60, // Every minute
              ease: "easeIn",
            }}
          >
            <div
              className="bg-yellow-200 rounded-full"
              style={{
                width: "3px",
                height: "3px",
                boxShadow: "0 0 12px rgba(254, 240, 138, 0.9)",
              }}
            />
            <div
              className="absolute top-0 left-0 bg-gradient-to-b from-yellow-200 to-transparent rounded-full"
              style={{
                width: "1px",
                height: "40px",
                transformOrigin: "top center",
                transform: "rotate(45deg)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};