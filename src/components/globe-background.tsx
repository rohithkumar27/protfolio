"use client";

import { motion } from "framer-motion";

export const GlobeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at center, rgba(100, 150, 255, 0.1) 0%, rgba(50, 100, 200, 0.05) 50%, transparent 100%)"
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[120vw] h-[120vw] border border-blue-500/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[100vw] h-[100vw] border border-purple-500/8 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[80vw] h-[80vw] border border-cyan-500/6 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute w-96 h-96 border border-blue-400/15 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-80 h-80 border border-purple-400/12 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 h-64 border border-cyan-400/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute w-48 h-48 border border-blue-300/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-32 h-32 border border-purple-300/15 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute w-6 h-6 bg-blue-400/40 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-300 rounded-full"
          style={{
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 8) * (150 + i * 20), 0],
            y: [0, Math.sin(i * Math.PI / 8) * (150 + i * 20), 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 10 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-2 h-2 border border-cyan-400/30 rotate-45"
          style={{
            left: `${20 + i * 10}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={`constellation-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${50 + Math.cos(i * Math.PI / 6) * 40}%`,
              top: `${50 + Math.sin(i * Math.PI / 6) * 40}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};