"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface RevolvingContentWrapperProps {
  children: ReactNode;
}

export const RevolvingContentWrapper = ({ children }: RevolvingContentWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable complex animations on mobile
  if (isMobile) {
    return (
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className="relative"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        zIndex: 10
      }}
      animate={{
        rotateY: [0, 1, 0, -1, 0], // Reduced rotation
        rotateX: [0, 0.5, 0, -0.5, 0], // Reduced rotation
      }}
      transition={{
        duration: 25, // Slower animation
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -5, 0, 5, 0], // Reduced floating motion
        }}
        transition={{
          duration: 18, // Slower animation
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.002, 1, 0.998, 1], // Much more subtle breathing
          }}
          transition={{
            duration: 15, // Slower animation
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};