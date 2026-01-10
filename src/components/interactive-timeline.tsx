"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, ExternalLink, GraduationCap, Briefcase } from "lucide-react";
import { DATA } from "@/data/resume";
import Link from "next/link";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "education" | "work";
  description?: string[];
  href?: string;
  logoUrl?: string;
}

export const InteractiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "education" | "work">("all");

  // Combine education and work experience into timeline items
  const timelineItems: TimelineItem[] = [
    ...DATA.education.map(edu => ({
      id: `edu-${edu.school}`,
      title: edu.degree,
      organization: edu.school,
      location: "Education",
      period: `${edu.start} - ${edu.end}`,
      type: "education" as const,
      href: edu.href,
      logoUrl: edu.logoUrl,
    })),
    ...DATA.technicalExperience.map(exp => ({
      id: `work-${exp.company}`,
      title: exp.title,
      organization: exp.company,
      location: exp.location,
      period: `${exp.start} - ${exp.end}`,
      type: "work" as const,
      description: exp.bullets,
      href: exp.href,
      logoUrl: exp.logoUrl,
    }))
  ].sort((a, b) => {
    // Sort by start year (most recent first)
    const yearA = parseInt(a.period.split(' - ')[0].split(' ').pop() || '0');
    const yearB = parseInt(b.period.split(' - ')[0].split(' ').pop() || '0');
    return yearB - yearA;
  });

  const filteredItems = timelineItems.filter(item => 
    filter === "all" || item.type === filter
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">My Journey</h2>
        <p className="text-muted-foreground mb-6">
          Explore my educational background and professional experience
        </p>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { key: "all", label: "All", icon: Calendar },
            { key: "education", label: "Education", icon: GraduationCap },
            { key: "work", label: "Experience", icon: Briefcase },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

        {/* Timeline Items */}
        <div className="space-y-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full border-4 border-background ${
                      item.type === "education" 
                        ? "bg-blue-500" 
                        : "bg-purple-500"
                    } shadow-lg`}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  className="flex-1 bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {item.type === "education" ? (
                          <GraduationCap className="w-4 h-4 text-blue-500" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-purple-500" />
                        )}
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium">{item.organization}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </div>
                      </div>
                    </div>
                    
                    {item.href && (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {selectedItem === item.id && item.description && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t">
                          <ul className="space-y-2">
                            {item.description.map((bullet, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="text-center p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold text-blue-500 mb-1">
            {DATA.education.length}
          </div>
          <div className="text-sm text-muted-foreground">Educational Milestones</div>
        </div>
        <div className="text-center p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold text-purple-500 mb-1">
            {DATA.technicalExperience.length}
          </div>
          <div className="text-sm text-muted-foreground">Professional Roles</div>
        </div>
        <div className="text-center p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold text-cyan-500 mb-1">
            {DATA.projects.length}
          </div>
          <div className="text-sm text-muted-foreground">Featured Projects</div>
        </div>
      </motion.div>
    </div>
  );
};