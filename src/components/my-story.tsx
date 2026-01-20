"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Lightbulb, Rocket, Target, Heart } from "lucide-react";

const storyChapters = [
  {
    id: "building",
    icon: Rocket,
    title: "Building & Breaking",
    subtitle: "CREW & Publicis Sapient (2022-2025)",
    content: "I dove into the startup world as a founding backend engineer at CREW, building gaming communities and social platforms. Then at Publicis Sapient, I worked on enterprise banking systems serving millions of users. Each challenge taught me something new about scale, reliability, and user experience in different environments.",
    highlight: "From startup founding engineer to enterprise production systems",
    color: "from-blue-400 to-purple-500"
  },
  {
    id: "exploring",
    icon: Target,
    title: "Pushing Boundaries",
    subtitle: "AI & Privacy Research",
    content: "I became fascinated by specialized AI applications and web privacy. My research spans two key areas: building domain-specific RAG systems for legal documents using techniques like DPO, and studying web privacy ecosystems including consent mechanisms and user tracking behaviors.",
    highlight: "RAG + DPO for legal AI, web privacy & consent research",
    color: "from-green-400 to-cyan-500"
  },
  {
    id: "future",
    icon: Heart,
    title: "What Drives Me",
    subtitle: "UMass Amherst & Beyond",
    content: "Now at UMass Amherst, I'm currently exploring the security side of large-scale systems and AI. How do we build systems that are not just intelligent and scalable, but also secure and resilient? My focus is on understanding security challenges in distributed systems and how AI can both create and solve security problems.",
    highlight: "Currently exploring security in large-scale AI systems",
    color: "from-purple-400 to-pink-500"
  }
];

export const MyStory = () => {
  const [activeChapter, setActiveChapter] = useState("building");

  return (
    <section className="mb-16">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every engineer has a journey. Here's mine—from curiosity to impact, 
            one project at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Chapter Navigation */}
          <div className="space-y-3">
            {storyChapters.map((chapter, index) => {
              const Icon = chapter.icon;
              const isActive = activeChapter === chapter.id;
              
              return (
                <motion.button
                  key={chapter.id}
                  onClick={() => setActiveChapter(chapter.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    isActive 
                      ? "bg-primary/10 border-primary/30 shadow-lg" 
                      : "bg-card/50 border-border/50 hover:bg-card/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      isActive ? "bg-primary/20" : "bg-muted"
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}>
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {chapter.subtitle}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? "rotate-90 text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Chapter Content */}
          <div className="relative">
            {storyChapters.map((chapter) => {
              const isActive = activeChapter === chapter.id;
              
              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                    display: isActive ? "block" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-5 rounded-xl`} />
                    
                    <div className="relative space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${chapter.color}`}>
                          <chapter.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{chapter.title}</h3>
                          <p className="text-sm text-muted-foreground">{chapter.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {chapter.content}
                      </p>

                      <div className={`p-3 rounded-lg bg-gradient-to-r ${chapter.color} bg-opacity-10 border-l-4 border-gradient-to-b ${chapter.color.replace('from-', 'border-').replace(' to-', ' border-')}`}>
                        <p className="text-sm font-medium text-foreground">
                          💡 {chapter.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};