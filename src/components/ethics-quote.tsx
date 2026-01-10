"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Code, Cloud, Shield, Brain } from "lucide-react";

interface TechFocusProps {
  delay?: number;
}

export const TechFocus = ({ delay = 0 }: TechFocusProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay + 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const focusAreas = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Backend & Distributed Systems",
      description: "Microservices, Kafka, REST/gRPC APIs, database optimization"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud & Infrastructure",
      description: "AWS, Docker, Kubernetes, CI/CD pipelines, observability"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Applied AI / GenAI",
      description: "RAG pipelines, LLM fine-tuning, evaluation, AI-powered products"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy & Security",
      description: "Web privacy measurement, tracking ecosystems, data protection"
    }
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-content-md"
    >
      {/* Section title with toggle button */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">What I Work On</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-full transition-all duration-200"
        >
          {isExpanded ? "Hide" : "Show details"}
          <ChevronDown 
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      
      {/* Always visible focus areas grid */}
      <motion.div
        variants={textVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {focusAreas.map((area, index) => (
          <div
            key={area.title}
            className="flex items-start gap-3 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
              {area.icon}
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">{area.title}</h3>
              <p className="text-xs text-muted-foreground">{area.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Collapsible detailed content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-content-sm pt-4 border-t">
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                My approach to software engineering is rooted in building systems that are not only scalable and performant, but also privacy-conscious and ethically designed. I believe that as engineers, we have a responsibility to consider the broader impact of the systems we build.
              </p>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                This philosophy drives my interest in privacy-aware system design, where I research how large-scale systems and AI applications handle user data. My work on analyzing the Indian web privacy ecosystem and studying tracking behaviors helps inform how I design backend and AI systems that prioritize user trust, compliance, and responsible data use.
              </p>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                Whether I'm building microservices architectures, implementing RAG pipelines, or designing cloud infrastructure, I always consider the privacy and security implications of the technical decisions I make.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 