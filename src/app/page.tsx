"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const TechStack = dynamic(() => import("@/components/tech-stack").then(mod => mod.TechStack), { ssr: false });
const TimelineItem = dynamic(() => import("@/components/resume-card").then(mod => mod.TimelineItem), { ssr: false });
const ContactOrbiting = dynamic(() => import("@/components/contact-orbiting").then(mod => mod.ContactOrbiting), { ssr: false });
const BlurFade = dynamic(() => import("@/components/magicui/blur-fade").then(mod => mod.default), { ssr: false });

// New storytelling components
const StoryHero = dynamic(() => import("@/components/story-hero").then(mod => mod.StoryHero), { ssr: false });
const MyStory = dynamic(() => import("@/components/my-story").then(mod => mod.MyStory), { ssr: false });
const ProjectStories = dynamic(() => import("@/components/project-stories").then(mod => mod.ProjectStories), { ssr: false });
const BeyondCode = dynamic(() => import("@/components/beyond-code").then(mod => mod.BeyondCode), { ssr: false });
const TimelineMap = dynamic(() => import("@/components/timeline-map").then(mod => mod.default), { ssr: false });

import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      {/* New Story-Driven Hero */}
      <StoryHero />

      {/* My Story Section */}
      <MyStory />

      {/* Project Stories */}
      <ProjectStories />

      {/* Timeline Map - Combined Experience & Education */}
      <section id="journey" className="mb-section-lg">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From academic foundations to professional milestones - a visual map of my path through technology and innovation.
              </p>
            </div>
          </BlurFade>
          <div className="max-w-4xl mx-auto">
            <TimelineMap />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 29}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life.
              </p>
            </div>
          </BlurFade>
          <TechStack delay={BLUR_FADE_DELAY * 30} />
        </div>
      </section>

      {/* Beyond Code - Personal Section */}
      <BeyondCode />

      <ContactOrbiting delay={BLUR_FADE_DELAY * 36} />
    </main>
  );
}