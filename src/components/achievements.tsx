"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "HackUMass XIII Winner",
    description: "Selected among 300+ teams for accessibility-focused mobile app",
    year: "2025",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "JEE Advanced Rank 1295",
    description: "All India Rank in one of India's most competitive engineering entrance exams",
    year: "2019",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Award,
    title: "Production Impact",
    description: "Built systems supporting 1M+ users in regulated banking environments",
    year: "2023-25",
    color: "from-green-500 to-teal-500"
  }
];

export const Achievements = () => {
  return (
    <section className="mb-16">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Key Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that shaped my journey in technology and engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-background/50 to-background/30 border border-border/50 backdrop-blur-sm hover:border-border/80 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} shadow-lg`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-background/50 px-2 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Subtle hover effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};