"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Film, BookOpen, Zap, Globe, Radar, Navigation } from "lucide-react";

const interests = [
  {
    id: "movies",
    icon: Film,
    title: "Cinema Enthusiast",
    subtitle: "Great Movies & Storytelling",
    description: "I'm passionate about great cinema across cultures and genres - from epic Indian films like RRR to mind-bending thrillers like Gone Girl. There's something about well-crafted storytelling and cinematography that inspires how I think about building elegant systems and user experiences.",
    favorites: ["Inception", "RRR", "The Dark Knight", "Gone Girl"],
    color: "from-purple-500 to-blue-500",
    bgGradient: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    code: "CIN-001"
  },
  {
    id: "books",
    icon: BookOpen,
    title: "Literary Escapes",
    subtitle: "Novels & Stories",
    description: "When I'm not debugging code, I'm diving into different worlds through books. Fiction gives me a break from technical thinking and often sparks creative solutions to coding problems.",
    favorites: ["Sci-Fi", "Thrillers", "Fantasy", "Mystery"],
    color: "from-blue-500 to-purple-500",
    bgGradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
    code: "LIT-002"
  },
  {
    id: "badminton",
    icon: Zap,
    title: "Badminton Court",
    subtitle: "Quick Reflexes",
    description: "The fast-paced nature of badminton keeps me sharp and focused. It's amazing how the split-second decision making on court translates to better problem-solving in code.",
    favorites: ["Singles", "Doubles", "Smashes", "Drop shots"],
    color: "from-green-500 to-teal-500",
    bgGradient: "bg-gradient-to-br from-green-500/10 to-teal-500/10",
    code: "SPT-003"
  },
  {
    id: "geopolitics",
    icon: Globe,
    title: "Global Perspectives",
    subtitle: "Geopolitics & World Affairs",
    description: "Understanding how the world works at a macro level fascinates me. Geopolitics teaches you about systems, incentives, and unintended consequences—lessons that apply everywhere.",
    favorites: ["International Relations", "Economic Policy", "Tech Diplomacy", "Global Trends"],
    color: "from-indigo-500 to-cyan-500",
    bgGradient: "bg-gradient-to-br from-indigo-500/10 to-cyan-500/10",
    code: "GEO-004"
  }
];

export const BeyondCode = () => {
  const [activeInterest, setActiveInterest] = useState("movies");
  const [isScanning, setIsScanning] = useState(true);

  const activeItem = interests.find(item => item.id === activeInterest) || interests[0];

  const handleInterestClick = (interestId: string) => {
    setActiveInterest(interestId);
    setIsScanning(false);
    setTimeout(() => setIsScanning(true), 4000);
  };

  return (
    <section className="mb-16">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Beyond the Code</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When I'm not building systems or researching AI security, here's what keeps me curious and energized.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Space Control Panel - Now on top */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Main Control Panel */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl border border-primary/30 backdrop-blur-md shadow-2xl">
                  {/* Header */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded-t-2xl border-b border-primary/30 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-primary" />
                      <span className="text-xs font-mono text-primary tracking-wider">INTEREST SCANNER</span>
                      <div className={`w-2 h-2 rounded-full ${isScanning ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
                    </div>
                  </div>

                  {/* Radar Display */}
                  <div className="absolute top-16 left-4 right-4 bottom-16">
                    <div className="relative w-full h-full rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                      {/* Radar Grid */}
                      <div className="absolute inset-4 rounded-full border border-primary/20" />
                      <div className="absolute inset-8 rounded-full border border-primary/15" />
                      
                      {/* Scanning Line */}
                      {isScanning && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.3) 30deg, transparent 60deg)`
                          }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      )}

                      {/* Interest Points */}
                      {interests.map((interest, index) => {
                        const angle = (index * 90) - 45;
                        const radius = 60 + (index % 2) * 20;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;
                        const isActive = activeInterest === interest.id;
                        
                        return (
                          <button
                            key={interest.id}
                            className={`absolute w-8 h-8 rounded-full border-2 transition-all duration-300 cursor-pointer z-10 ${
                              isActive 
                                ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50 scale-125' 
                                : 'bg-slate-700/80 border-blue-400/40 hover:border-blue-400 hover:scale-110'
                            }`}
                            style={{
                              left: `calc(50% + ${x}px - 1rem)`,
                              top: `calc(50% + ${y}px - 1rem)`,
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleInterestClick(interest.id);
                            }}
                          >
                            <interest.icon 
                              className={`w-4 h-4 mx-auto ${
                                isActive ? 'text-white' : 'text-blue-400'
                              }`} 
                            />
                            
                            {/* Pulse effect for active item */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-blue-400"
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                          </button>
                        );
                      })}

                      {/* Center Crosshair */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="relative">
                          <Radar className="w-6 h-6 text-blue-400/60" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-b-2xl border-t border-primary/30 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-green-400">ONLINE</span>
                    </div>
                    <div className="text-xs font-mono text-blue-400/80">
                      {activeItem.code}
                    </div>
                  </div>
                </div>

                {/* Corner Details */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/50" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400/50" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400/50" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400/50" />
              </div>
            </div>

            {/* Content Display - Now below the control panel */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeInterest}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 rounded-xl ${activeItem.bgGradient} border border-border/50 backdrop-blur-sm`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${activeItem.color}`}>
                          <activeItem.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">{activeItem.title}</h3>
                            <span className="text-xs font-mono bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                              {activeItem.code}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{activeItem.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {activeItem.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Current Favorites:</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeItem.favorites.map((favorite, index) => (
                            <motion.span
                              key={favorite}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1 text-xs font-medium bg-card/60 border border-border text-card-foreground rounded-full"
                            >
                              {favorite}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Control Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-blue-400/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-mono text-blue-400 tracking-wider">CONTROL PANEL</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Click on any radar blip to lock onto that interest. 
                  The scanner will pause momentarily, then resume its sweep.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};