"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Coffee, Code, Sparkles, Layers } from "lucide-react";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export const StoryHero = () => {
  return (
    <section className="mb-16 relative">
      <div className="w-full space-y-8 px-4 md:px-0">
        {/* Main Hero */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: BLUR_FADE_DELAY * 2, duration: 0.6 }}
            className="relative inline-block"
          >
            <Avatar className="size-40 border-4 border-primary/20 shadow-2xl mx-auto">
              <AvatarImage 
                alt={DATA.name} 
                src={DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 border-2 border-dashed border-primary/30 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BLUR_FADE_DELAY * 4, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Rohith
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Massachusetts, USA</span>
              <Coffee className="w-4 h-4 ml-2" />
              <span>Fueled by curiosity</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BLUR_FADE_DELAY * 6, duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">software engineer</span> who loves building things that matter. 
              Currently pursuing my Master's at <span className="text-blue-400 font-semibold">UMass Amherst</span>, 
              I specialize in backend systems, AI applications, and I'm currently exploring the security side of large-scale systems.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Code, label: "Backend Systems", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                { icon: Sparkles, label: "Applied AI", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                { icon: MapPin, label: "AI Security", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
                { icon: Code, label: "Full Stack", color: "bg-green-500/10 text-green-400 border-green-500/20" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: BLUR_FADE_DELAY * 8 + index * 0.1, duration: 0.4 }}
                >
                  <Badge variant="outline" className={`px-4 py-2 ${item.color} border`}>
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: BLUR_FADE_DELAY * 10, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: "1M+", label: "Users Served", desc: "Enterprise & startup systems" },
            { number: "30.6%", label: "Better Retrieval", desc: "Legal RAG system" },
            { number: "🏆", label: "HackUMass XIII Winner", desc: "Selected among 300+ teams" },
            { number: "🏆", label: "JEE Rank 1295", desc: "All India achievement" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};