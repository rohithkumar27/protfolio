"use client";

import { Trophy, Award, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Trophy,
    title: "HackUMass XIII Winner",
    description: "Slide Scribe - Accessibility app for visually impaired students",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Target,
    title: "30.6% Improvement",
    description: "Enhanced retrieval span recall in Legal RAG system",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "40% Faster Reports",
    description: "AI-assisted reporting system for enterprise banking",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Award,
    title: "100k+ Users",
    description: "Gaming platform backend supporting large-scale communities",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

interface AchievementsProps {
  delay?: number;
}

export const Achievements = ({ delay = 0 }: AchievementsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="group relative p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${achievement.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-4 h-4 ${achievement.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};