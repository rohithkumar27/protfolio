"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevolvingContentWrapperProps {
  children: ReactNode;
}

export const RevolvingContentWrapper = ({ children }: RevolvingContentWrapperProps) => {
  return (
    <motion.div
      className="relative z-10"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateY: [0, 2, 0, -2, 0], // Subtle Y-axis rotation
        rotateX: [0, 1, 0, -1, 0], // Subtle X-axis rotation
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0, 10, 0], // Gentle floating motion
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.005, 1, 0.995, 1], // Very subtle breathing effect
          }}
          transition={{
            duration: 12,
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