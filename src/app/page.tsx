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

      {/* Experience Section - Simplified */}
      <section id="experience" className="mb-section-lg">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From startup founding engineer to enterprise systems, here's where I've applied my skills across different scales and environments.
              </p>
            </div>
          </BlurFade>
          <div className="divide-y divide-border/30 max-w-3xl mx-auto">
            {DATA.technicalExperience.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 18 + id * 0.02}>
                <TimelineItem
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  bullets={work.bullets}
                  isLast={id === DATA.technicalExperience.length - 1}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Simplified */}
      <section id="education" className="mb-section-lg">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The academic foundation that shaped my engineering mindset.
              </p>
            </div>
          </BlurFade>
          <div className="divide-y divide-border/30 max-w-3xl mx-auto">
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 20 + id * 0.02}>
                <TimelineItem
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  href={education.href}
                  period={`${education.start} - ${education.end}`}
                  isLast={id === DATA.education.length - 1}
                />
              </BlurFade>
            ))}
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