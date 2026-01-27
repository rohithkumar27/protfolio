"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, GraduationCap, Briefcase, Rocket, Satellite, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";

interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  period: string;
  logoUrl: string;
  href?: string;
  description?: string[];
  startYear: number;
  endYear: number;
}

const TimelineMap = () => {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  // Function to get different planet designs
  const getPlanetDesign = (index: number, type: 'work' | 'education') => {
    const designs = {
      work: [
        // Design 1: Classic Blue Planet
        {
          base: 'bg-gradient-to-br from-cyan-400/90 via-blue-500/80 to-indigo-600/90',
          texture: 'bg-gradient-to-br from-blue-300/40 via-transparent to-blue-800/60',
          glow: 'bg-gradient-to-br from-cyan-400/30 to-blue-600/30',
          rings: 'border-cyan-300',
          ringsDotted: 'border-blue-400'
        },
        // Design 2: Ocean Planet
        {
          base: 'bg-gradient-to-br from-teal-400/90 via-cyan-500/80 to-blue-700/90',
          texture: 'bg-gradient-to-br from-teal-200/50 via-transparent to-cyan-900/70',
          glow: 'bg-gradient-to-br from-teal-300/40 to-cyan-600/40',
          rings: 'border-teal-300',
          ringsDotted: 'border-cyan-400'
        },
        // Design 3: Tech Planet
        {
          base: 'bg-gradient-to-br from-blue-400/90 via-indigo-500/80 to-purple-600/90',
          texture: 'bg-gradient-to-br from-blue-200/40 via-transparent to-indigo-900/60',
          glow: 'bg-gradient-to-br from-blue-400/30 to-indigo-600/30',
          rings: 'border-blue-300',
          ringsDotted: 'border-indigo-400'
        }
      ],
      education: [
        // Design 1: Classic Purple Planet
        {
          base: 'bg-gradient-to-br from-violet-400/90 via-purple-500/80 to-fuchsia-600/90',
          texture: 'bg-gradient-to-br from-purple-300/40 via-transparent to-purple-800/60',
          glow: 'bg-gradient-to-br from-violet-400/30 to-purple-600/30',
          rings: 'border-violet-300',
          ringsDotted: 'border-purple-400'
        },
        // Design 2: Academic Planet
        {
          base: 'bg-gradient-to-br from-purple-400/90 via-indigo-500/80 to-blue-600/90',
          texture: 'bg-gradient-to-br from-purple-200/50 via-transparent to-indigo-900/70',
          glow: 'bg-gradient-to-br from-purple-300/40 to-indigo-600/40',
          rings: 'border-purple-300',
          ringsDotted: 'border-indigo-400'
        },
        // Design 3: Knowledge Planet
        {
          base: 'bg-gradient-to-br from-fuchsia-400/90 via-pink-500/80 to-purple-600/90',
          texture: 'bg-gradient-to-br from-fuchsia-200/40 via-transparent to-pink-900/60',
          glow: 'bg-gradient-to-br from-fuchsia-400/30 to-pink-600/30',
          rings: 'border-fuchsia-300',
          ringsDotted: 'border-pink-400'
        }
      ]
    };
    
    return designs[type][index % designs[type].length];
  };

  // Combine and sort all timeline items
  const timelineItems: TimelineItem[] = [
    ...DATA.technicalExperience.map((exp, index) => ({
      id: `work-${index}`,
      type: 'work' as const,
      title: exp.title,
      subtitle: exp.company,
      organization: exp.company,
      location: exp.location,
      period: `${exp.start} - ${exp.end || 'Present'}`,
      logoUrl: exp.logoUrl,
      href: exp.href,
      description: exp.bullets,
      startYear: parseInt(exp.start.split(' ')[1]) || new Date().getFullYear(),
      endYear: exp.end ? parseInt(exp.end.split(' ')[1]) : new Date().getFullYear(),
    })),
    ...DATA.education.map((edu, index) => ({
      id: `edu-${index}`,
      type: 'education' as const,
      title: edu.degree,
      subtitle: edu.school,
      organization: edu.school,
      location: 'Academic Sector',
      period: `${edu.start} - ${edu.end}`,
      logoUrl: edu.logoUrl,
      href: edu.href,
      startYear: parseInt(edu.start.split(' ')[1]) || 2019,
      endYear: parseInt(edu.end.split(' ')[1]) || 2027,
    }))
  ].sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="relative min-h-[800px] bg-gradient-to-b from-slate-900/30 to-slate-800/20 rounded-2xl border border-primary/20 mobile-blur-fix overflow-hidden">
      {/* Space Background Elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Nebula Clouds */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-full blur-xl" />
      </div>

      {/* Static Dotted Path connecting all stations */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="staticPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="25%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="75%" stopColor="rgba(16, 185, 129, 0.3)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.4)" />
          </linearGradient>
          <linearGradient id="continuingPath" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0.4)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.1)" />
          </linearGradient>
        </defs>
        {/* Main dotted path connecting all milestones */}
        <path
          d="M 96 160 L 96 280 L 96 400 L 96 520 L 96 640"
          stroke="url(#staticPathGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,12"
          className="opacity-60"
        />
        {/* Continuing path beyond last milestone */}
        <path
          d="M 96 640 L 96 740"
          stroke="url(#continuingPath)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,12"
          className="opacity-40"
        />
        {/* Arrow indicating continuation */}
        <path
          d="M 90 730 L 96 740 L 102 730"
          stroke="rgba(245, 158, 11, 0.6)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        />
      </svg>

      {/* Flight Path - Rocket's curved journey */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="25%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.7)" />
            <stop offset="75%" stopColor="rgba(16, 185, 129, 0.6)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.8)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Curved path for rocket animation */}
        <path
          d="M 96 160 Q 200 180 96 280 Q 50 340 96 400 Q 180 430 96 520 Q 50 580 96 640"
          stroke="url(#pathGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="15,8"
          className="opacity-80"
          filter="url(#glow)"
        />
      </svg>

      {/* Animated Space Jet following the milestone path */}
      <motion.div
        className="absolute z-10"
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          offsetPath: "path('M 96 160 Q 200 180 96 280 Q 50 340 96 400 Q 180 430 96 520 Q 50 580 96 640')",
          offsetRotate: "auto",
        }}
      >
        <div className="relative">
          {/* Custom Rocket Design */}
          <div className="relative w-8 h-12 flex items-center justify-center">
            {/* Rocket Body */}
            <div className="absolute w-6 h-10 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-full rounded-b-sm shadow-lg left-1/2 top-0 transform -translate-x-1/2">
              {/* Rocket Nose */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-md" />
              
              {/* Rocket Windows */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full" />
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full" />
              
              {/* Rocket Fins */}
              <div className="absolute -bottom-1 -left-1 w-2 h-3 bg-gradient-to-br from-gray-400 to-gray-600 transform rotate-12 rounded-bl-md" />
              <div className="absolute -bottom-1 -right-1 w-2 h-3 bg-gradient-to-br from-gray-400 to-gray-600 transform -rotate-12 rounded-br-md" />
              
              {/* Rocket Exhaust Fire - positioned at the exact center of rocket base */}
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2"
                animate={{
                  scaleY: [0.8, 1.2, 0.8],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ left: '50%' }}
              >
                {/* Main flame */}
                <div className="w-3 h-4 bg-gradient-to-b from-orange-400 via-red-500 to-yellow-300 rounded-b-full opacity-90 shadow-lg" />
                {/* Inner flame */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-b from-yellow-200 to-orange-300 rounded-b-full" />
              </motion.div>
            </div>
            
            {/* Rocket Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-purple-400/20 rounded-full blur-sm"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Space Stations (Timeline Items) */}
      <div className="relative z-20 p-8">
        <div className="space-y-12">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isSelected = selectedStation === item.id;
            const planetDesign = getPlanetDesign(index, item.type);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Space Station */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedStation(isSelected ? null : item.id)}
                    className="relative w-24 h-24 cursor-pointer transition-all duration-300"
                  >
                    {/* Planet Base */}
                    <div className={`absolute inset-0 rounded-full shadow-2xl ${planetDesign.base}`}>
                      {/* Planet Surface Texture */}
                      <div className={`absolute inset-0 rounded-full opacity-30 ${planetDesign.texture}`} />
                      
                      {/* Planet Craters/Features - Different patterns for each planet */}
                      {index % 3 === 0 && (
                        <>
                          <div className="absolute top-2 left-3 w-2 h-2 bg-black/20 rounded-full" />
                          <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-black/15 rounded-full" />
                          <div className="absolute bottom-3 left-5 w-1 h-1 bg-black/25 rounded-full" />
                        </>
                      )}
                      {index % 3 === 1 && (
                        <>
                          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-black/25 rounded-full" />
                          <div className="absolute bottom-2 left-4 w-2 h-2 bg-black/15 rounded-full" />
                          <div className="absolute top-6 left-2 w-1 h-1 bg-black/20 rounded-full" />
                          <div className="absolute bottom-4 right-5 w-1 h-1 bg-black/30 rounded-full" />
                        </>
                      )}
                      {index % 3 === 2 && (
                        <>
                          <div className="absolute top-1 left-4 w-1 h-1 bg-black/30 rounded-full" />
                          <div className="absolute top-5 right-2 w-1.5 h-1.5 bg-black/20 rounded-full" />
                          <div className="absolute bottom-1 left-6 w-1 h-1 bg-black/25 rounded-full" />
                          <div className="absolute bottom-5 right-6 w-2 h-2 bg-black/15 rounded-full" />
                        </>
                      )}
                      
                      {/* Planet Highlight - Different positions */}
                      <div className={`absolute ${
                        index % 2 === 0 ? 'top-1 left-2' : 'top-2 right-2'
                      } w-6 h-6 rounded-full opacity-40 bg-gradient-to-br from-white/60 to-transparent`} />
                      
                      {/* Additional surface features for variety */}
                      {index % 4 === 0 && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-black/10 rounded-full opacity-50" />
                      )}
                      {index % 4 === 1 && (
                        <div className="absolute top-1/3 right-1/4 w-3 h-3 border border-black/15 rounded-full opacity-30" />
                      )}
                    </div>

                    {/* Planet Atmosphere Glow */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ 
                        duration: 4 + (index * 0.5), // Different speeds for each planet
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute -inset-2 rounded-full blur-md ${planetDesign.glow}`}
                    />

                    {/* Organization Logo */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      {item.logoUrl ? (
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg border-2 border-white/50">
                          <Image
                            src={item.logoUrl}
                            alt={item.organization}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Hide the image and show fallback icon instead
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600">${
                                  item.type === 'work' 
                                    ? '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>'
                                    : '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>'
                                }</div>`;
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-white/50 flex items-center justify-center">
                          <div className="w-8 h-8 text-gray-600">
                            {item.type === 'work' ? <Briefcase /> : <GraduationCap />}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Orbital Rings - Different speeds and directions */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 20 + (index * 3), // Different speeds
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute -inset-4 border-2 border-dashed rounded-full opacity-30 ${planetDesign.rings}`}
                    />
                    
                    <motion.div
                      animate={{ rotate: index % 2 === 0 ? -360 : 360 }} // Different directions
                      transition={{ 
                        duration: 15 + (index * 2),
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute -inset-6 border border-dotted rounded-full opacity-20 ${planetDesign.ringsDotted}`}
                    />

                    {/* Selection Indicator */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`absolute -inset-2 rounded-full border-4 ${planetDesign.rings} shadow-lg`}
                      />
                    )}

                    {/* Hover Effect */}
                    <motion.div
                      whileHover={{ scale: 1.2, opacity: 0.8 }}
                      className={`absolute -inset-1 rounded-full blur-sm opacity-0 ${planetDesign.glow}`}
                    />
                  </motion.div>
                </div>

                {/* Milestone Name (Always Visible) */}
                <div className={`flex-shrink-0 ${isLeft ? 'text-left' : 'text-right'}`}>
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.subtitle}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal for Selected Station */}
      {selectedStation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStation(null)}
        >
          {(() => {
            const selectedItem = timelineItems.find(item => item.id === selectedStation);
            if (!selectedItem) return null;
            const planetDesign = getPlanetDesign(timelineItems.indexOf(selectedItem), selectedItem.type);

            return (
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.7, opacity: 0, y: 50 }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300,
                  duration: 0.5
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl"
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl" />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
                  selectedItem.type === 'work'
                    ? 'from-cyan-500/50 via-blue-500/50 to-indigo-500/50'
                    : 'from-violet-500/50 via-purple-500/50 to-fuchsia-500/50'
                } p-[2px]`}>
                  <div className="w-full h-full bg-slate-900/90 rounded-3xl" />
                </div>

                {/* Floating Orbs Background */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-32 h-32 rounded-full blur-3xl opacity-20 ${
                        selectedItem.type === 'work' 
                          ? 'bg-gradient-to-br from-cyan-400 to-blue-600'
                          : 'bg-gradient-to-br from-violet-400 to-purple-600'
                      }`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -30, 30, 0],
                        scale: [1, 1.2, 0.8, 1],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedStation(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 z-20 backdrop-blur-sm border border-white/20 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Content */}
                <div className="relative z-10 p-8 overflow-y-auto max-h-[90vh]">
                  {/* Header Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-start gap-8 mb-8"
                  >
                    {/* Logo with Planet Design */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-24 h-24 rounded-2xl ${planetDesign.base} p-1 shadow-2xl`}>
                        <div className="w-full h-full rounded-xl overflow-hidden bg-white/95 flex items-center justify-center">
                          {selectedItem.logoUrl ? (
                            <Image
                              src={selectedItem.logoUrl}
                              alt={selectedItem.organization}
                              width={88}
                              height={88}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          ) : (
                            <div className="text-gray-600">
                              {selectedItem.type === 'work' ? 
                                <Briefcase className="w-12 h-12" /> : 
                                <GraduationCap className="w-12 h-12" />
                              }
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl border-2 ${planetDesign.rings}`}
                      />
                    </div>
                    
                    {/* Title and Info */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex items-start gap-4 mb-4"
                      >
                        <div className="flex-1">
                          <h2 className="text-4xl font-bold text-white mb-2 leading-tight">
                            {selectedItem.title}
                          </h2>
                          <h3 className="text-2xl font-semibold text-white/90 mb-4">
                            {selectedItem.subtitle}
                          </h3>
                        </div>
                        
                        {selectedItem.href && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Link
                              href={selectedItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
                            >
                              <ExternalLink className="w-6 h-6" />
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                      
                      {/* Meta Information */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap gap-3"
                      >
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                          <Calendar className="w-4 h-4 text-white/80" />
                          <span className="text-white/90 font-medium">{selectedItem.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                          <MapPin className="w-4 h-4 text-white/80" />
                          <span className="text-white/90 font-medium">{selectedItem.location}</span>
                        </div>
                        
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm shadow-lg border ${
                          selectedItem.type === 'work'
                            ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-cyan-400/50 text-cyan-100'
                            : 'bg-gradient-to-r from-violet-500/30 to-purple-500/30 border-violet-400/50 text-violet-100'
                        }`}>
                          {selectedItem.type === 'work' ? <Zap className="w-4 h-4" /> : <Satellite className="w-4 h-4" />}
                          <span>{selectedItem.type === 'work' ? 'MISSION' : 'ACADEMY'}</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Achievements Section */}
                  {selectedItem.description && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-4 h-4 rounded-full ${
                          selectedItem.type === 'work' ? 'bg-cyan-400' : 'bg-violet-400'
                        } shadow-lg`} />
                        <h4 className="text-2xl font-bold text-white">
                          {selectedItem.type === 'work' ? 'Key Achievements' : 'Program Highlights'}
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {selectedItem.description.map((desc, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                            className="flex items-start gap-4 group"
                          >
                            <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-125 ${
                              selectedItem.type === 'work' ? 'bg-cyan-300' : 'bg-violet-300'
                            }`} />
                            <p className="text-white/95 leading-relaxed text-lg font-medium group-hover:text-white transition-colors duration-300">
                              {desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
};

export default TimelineMap;