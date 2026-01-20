"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Users, Zap, Heart, Code } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Security-Focused Research",
    description: "I'm currently exploring the security side of large-scale systems and AI. My background in web privacy research gives me a foundation to understand security challenges from multiple angles—technical, user, and systemic.",
    example: "Currently studying how security challenges manifest in distributed AI systems, building on my previous work with consent mechanisms and privacy-preserving architectures.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Domain-Specific AI Research",
    description: "I specialize in adapting AI for specific domains, particularly legal document processing. I don't just use off-the-shelf models—I fine-tune and optimize them for specialized tasks using techniques like DPO.",
    example: "Built a metadata-enriched RAG system for legal documents and fine-tuned LLaMA 3.2 using Direct Preference Optimization, achieving 30.6% improvement in retrieval accuracy.",
    color: "from-purple-400 to-violet-500"
  },
  {
    icon: Users,
    title: "End-to-End Ownership",
    description: "I take responsibility for features from conception to production. At Publicis Sapient, I owned complete workflows—design, implementation, deployment, and monitoring in regulated environments.",
    example: "Built microservices supporting 1M+ users, handling everything from API design to production monitoring and incident response.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Performance-Conscious",
    description: "I care about how systems perform under real load. Having worked on production systems serving millions of users, I understand the difference between code that works and code that scales.",
    example: "Optimized event-driven architectures with Kafka to handle peak loads while maintaining low latency for banking operations.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Heart,
    title: "Problem-First Approach",
    description: "I start with the problem, not the technology. Whether it's accessibility for students or efficiency for business users, I focus on solving real problems that matter to people.",
    example: "Won HackUMass by focusing on a genuine accessibility challenge rather than just showcasing cool tech.",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: Code,
    title: "Continuous Learner",
    description: "Technology evolves fast, and I stay curious. From my undergrad at IIT to my current Master's at UMass, I'm always learning—whether it's new AI techniques or system design patterns.",
    example: "Currently exploring how AI can enhance security in distributed systems, combining my backend experience with cutting-edge research.",
    color: "from-indigo-400 to-purple-500"
  }
];

export const WhatMakesMeDifferent = () => {
  return (
    <section className="mb-16">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">What I Bring to the Table</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's what I've learned from building production systems, conducting research, 
            and working on projects that actually matter to people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Example */}
                  <div className="p-3 rounded-lg bg-muted/30 border-l-4 border-primary/30">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">Example:</span> {item.example}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold">Interested in Working Together?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing interesting projects, whether it's building scalable systems, 
            exploring AI applications, or tackling complex technical challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:rohit.tumati@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/rohithkumar27"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-card/80 transition-colors"
            >
              Check Out My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};