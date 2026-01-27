"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Play, Lightbulb, Zap, Users, Award, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";

const projectStories = [
  {
    id: "legal-rag",
    project: DATA.projects[0], // Meta-Enriched RAG for Legal LLMs
    story: {
      problem: "Legal professionals spend hours searching through documents, with traditional search missing contextual nuances and domain-specific understanding.",
      solution: "Designed a metadata-enriched RAG pipeline that understands legal document structure and context, with hybrid dense+sparse retrieval.",
      impact: "Improved retrieval span recall by 30.6% and fine-tuned LLaMA 3.2 (3B) using Direct Preference Optimization for legal reasoning.",
      techChallenge: "Balancing retrieval accuracy with privacy constraints when handling sensitive legal documents, while optimizing for domain-specific tasks."
    },
    icon: Lightbulb,
    color: "from-blue-400 to-purple-500",
    stats: [
      { label: "Accuracy Improvement", value: "30.6%" },
      { label: "Model Size", value: "3B params" },
      { label: "Privacy-First", value: "✓" }
    ]
  },
  {
    id: "slide-scribe",
    project: DATA.projects[1], // Slide Scribe
    story: {
      problem: "Visually impaired students struggle to follow classroom presentations in real-time, missing crucial visual information.",
      solution: "Built an accessibility-focused mobile app that uses OCR and LLMs to provide real-time Q&A over classroom slides.",
      impact: "Won HackUMass XIII among 300+ teams by creating an inclusive learning experience that levels the playing field for all students.",
      techChallenge: "Optimizing OCR + LLM processing for low-latency mobile performance while maintaining accuracy for educational content."
    },
    icon: Award,
    color: "from-yellow-400 to-orange-500",
    stats: [
      { label: "Hackathon Winner", value: "🏆" },
      { label: "Teams Competed", value: "300+" },
      { label: "Accessibility Focus", value: "100%" }
    ]
  },
  {
    id: "unitrade",
    project: DATA.projects[2], // UniTrade
    story: {
      problem: "College students need a trusted platform to buy/sell items within their campus community safely and efficiently.",
      solution: "Built a campus-exclusive marketplace with real-time features, AI-powered search, and community moderation systems.",
      impact: "Created a secure trading environment with real-time auctions, chat, and intelligent item recommendations using Google Gemini.",
      techChallenge: "Implementing real-time bidding with Socket.IO while maintaining data consistency across concurrent users and transactions."
    },
    icon: Users,
    color: "from-purple-400 to-pink-500",
    stats: [
      { label: "Real-time Features", value: "✓" },
      { label: "AI Search", value: "Gemini" },
      { label: "Campus-Only", value: "Secure" }
    ]
  },
  {
    id: "cookie-privacy",
    project: DATA.projects[3], // Cookie Privacy Analysis
    story: {
      problem: "Understanding how websites handle cookie consent and user privacy is crucial, but analyzing these patterns at scale across the web is challenging.",
      solution: "Built automated tools to analyze cookie consent mechanisms, dark patterns, and tracking behaviors across websites to study web privacy ecosystems.",
      impact: "Generated insights into cookie consent flows and privacy practices, contributing to understanding of web privacy challenges and user interactions.",
      techChallenge: "Developing scalable analysis tools that can systematically study cookie consent patterns and privacy implementations across diverse websites."
    },
    icon: Shield,
    color: "from-green-400 to-cyan-500",
    stats: [
      { label: "Cookie Analysis", value: "✓" },
      { label: "Consent Flows", value: "Web-scale" },
      { label: "Privacy Patterns", value: "Studied" }
    ]
  }
];

export const ProjectStories = () => {
  const [selectedProject, setSelectedProject] = useState(projectStories[0].id);

  const activeStory = projectStories.find(p => p.id === selectedProject);

  return (
    <section className="mb-16">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Projects That Matter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project tells a story of problems solved, challenges overcome, 
            and lessons learned. Here are the ones I'm most proud of.
          </p>
        </motion.div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {projectStories.map((story, index) => {
            const Icon = story.icon;
            const isActive = selectedProject === story.id;
            
            return (
              <motion.button
                key={story.id}
                onClick={() => setSelectedProject(story.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/10 border-primary/30 shadow-lg" 
                    : "bg-card/50 border-border/50 hover:bg-card/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className={`font-medium ${
                  isActive ? "text-primary" : "text-foreground"
                }`}>
                  {story.project.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Project Story */}
        <AnimatePresence mode="wait">
          {activeStory && (
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="md:col-span-1 space-y-6">
                  <div className="relative p-6 rounded-xl bg-card/90 border border-border/50 mobile-blur-fix">
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeStory.color} opacity-5 rounded-xl`} />
                    
                    <div className="relative space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${activeStory.color}`}>
                          <activeStory.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{activeStory.project.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {activeStory.project.dates}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {activeStory.project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {activeStory.project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{activeStory.project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {activeStory.project.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
                          >
                            {link.icon}
                            {link.type}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-3">
                    {activeStory.stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center p-3 rounded-lg bg-card/50 border border-border/50"
                      >
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className="font-semibold text-primary">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Story Content */}
                <div className="md:col-span-2 space-y-6">
                  {[
                    { title: "The Problem", content: activeStory.story.problem, icon: "🎯" },
                    { title: "My Solution", content: activeStory.story.solution, icon: "💡" },
                    { title: "The Impact", content: activeStory.story.impact, icon: "🚀" },
                    { title: "Technical Challenge", content: activeStory.story.techChallenge, icon: "⚡" },
                  ].map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-card/30 border border-border/30"
                    >
                      <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                        <span>{section.icon}</span>
                        {section.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};