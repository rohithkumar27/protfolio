"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TechStack = dynamic(() => import("@/components/tech-stack").then(mod => mod.TechStack), { ssr: false });
const TimelineItem = dynamic(() => import("@/components/resume-card").then(mod => mod.TimelineItem), { ssr: false });
const ContactOrbiting = dynamic(() => import("@/components/contact-orbiting").then(mod => mod.ContactOrbiting), { ssr: false });


const HongKongMap = dynamic(() => import("@/components/hong-kong-map").then(mod => mod.HongKongMap), { ssr: false });
const WorldMap = dynamic(() => import("@/components/world-map").then(mod => mod.WorldMap), { ssr: false });
const BlurFade = dynamic(() => import("@/components/magicui/blur-fade").then(mod => mod.default), { ssr: false });
const BlurFadeText = dynamic(() => import("@/components/magicui/blur-fade-text").then(mod => mod.default), { ssr: false });
const ProjectCard = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), { ssr: false });
const ResumeCard = dynamic(() => import("@/components/resume-card").then(mod => mod.ResumeCard), { ssr: false });
const BookCard = dynamic(() => import("@/components/book-card").then(mod => mod.BookCard), { ssr: false });
const InteractiveTimeline = dynamic(() => import("@/components/interactive-timeline").then(mod => mod.InteractiveTimeline), { ssr: false });
const Achievements = dynamic(() => import("@/components/achievements").then(mod => mod.Achievements), { ssr: false });
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [expandedBooks, setExpandedBooks] = useState<Record<string, boolean>>({});
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const toggleBookCategory = (theme: string) => {
    setExpandedBooks(prev => ({ ...prev, [theme]: !prev[theme] }));
  };

  // Reorder projects: Slide Scribe (0) and Meta-Enriched RAG (1) first, then UniTrade (2) and AI-Assisted Reporting (3)
  const featuredProjects = [DATA.projects[0], DATA.projects[1]];
  const moreProjects = [DATA.projects[2], DATA.projects[3]];

  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <section id="hero" className="mb-section-lg">
        <div className="w-full space-y-content-lg px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center md:items-start">
            {/* Avatar - shows first on mobile, right on desktop */}
            <BlurFade delay={BLUR_FADE_DELAY * 2} className="md:order-2">
              <Avatar className="size-32 border-2 shadow-lg">
                <AvatarImage 
                  alt={DATA.name} 
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            
            {/* Text content - shows second on mobile, left on desktop */}
            <div className="flex-col flex flex-1 space-y-3 items-center md:items-start text-center md:text-left md:order-1 w-full">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 3}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none w-full"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}.`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm text-muted-foreground md:text-base">
                  Master's in Computer Science @ UMass Amherst
                  <br />
                  Software Engineer | Backend • Cloud • Applied AI • Privacy
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <InteractiveTimeline />
      </BlurFade>

      <section id="about" className="mb-section-lg">
        <div className="space-y-content-md">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">About</h2>
              <button
                onClick={() => setAboutExpanded(!aboutExpanded)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-full transition-all duration-200"
              >
                {aboutExpanded ? "Hide" : "Read more"}
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </BlurFade>
          
          <AnimatePresence>
            {aboutExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-content-sm">
                  <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    I build scalable backend systems, cloud-native services, and production-grade AI applications, with a strong interest in privacy-aware system design.
                  </p>
                  <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    Previously worked as a Software Development Engineer at Publicis Sapient (Lloyds Banking Group) and as a Founding Backend Engineer at an early-stage startup. I enjoy working at the intersection of systems, data, and real-world impact.
                  </p>
                  <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    My work spans backend & distributed systems (microservices, Kafka, REST/gRPC), cloud infrastructure (AWS, Docker, Kubernetes), applied AI/GenAI (RAG pipelines, LLM fine-tuning), and privacy & security research.
                  </p>
                  <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    I'm deeply interested in how large-scale systems and AI applications handle user data. I've conducted research on the Indian web privacy ecosystem, analyzing cookies, third-party trackers, and dark-pattern consent flows, and studied tracking behaviors in relation to emerging data protection regulations.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section id="achievements" className="mb-section-lg">
        <div className="space-y-content-md">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Key Achievements</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <Achievements delay={BLUR_FADE_DELAY * 16} />
          </BlurFade>
        </div>
      </section>

      <section id="work" className="mb-section-lg">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          <div className="divide-y divide-border/30">
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

      <section id="education" className="mb-section-lg">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="divide-y divide-border/30">
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

      <section id="projects" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Projects.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From hackathon winners to research-grade systems, here are some projects I'm proud of.
                </p>
              </div>
            </div>
          </BlurFade>
          
          {/* Featured Projects */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {featuredProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 23 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          {/* Expand button */}
          <BlurFade delay={BLUR_FADE_DELAY * 24}>
            <div className="flex justify-center">
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-full transition-all duration-200"
              >
                {projectsExpanded ? "Show less" : "Show more projects"}
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${projectsExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </BlurFade>

          {/* More Projects */}
          <AnimatePresence>
            {projectsExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                  {moreProjects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={0.05 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section id="books" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 26}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Reading List.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technical books and resources that have shaped my engineering approach.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 27}>
            <div className="space-y-4">
              {DATA.books.map((themeGroup, themeId) => (
                <div key={themeGroup.theme}>
                  <BlurFade delay={BLUR_FADE_DELAY * 28 + themeId * 0.1}>
                    <button
                      onClick={() => toggleBookCategory(themeGroup.theme)}
                      className="flex items-center gap-2 w-full text-left group"
                    >
                      <h3 className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        {themeGroup.theme}
                      </h3>
                      <span className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-muted-foreground group-hover:text-foreground bg-muted/50 group-hover:bg-muted rounded-full transition-all duration-200">
                        {expandedBooks[themeGroup.theme] ? "Hide" : `${themeGroup.books.length} books`}
                        <ChevronDown 
                          className={`w-3 h-3 transition-transform duration-200 ${expandedBooks[themeGroup.theme] ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                  </BlurFade>
                  <AnimatePresence>
                    {expandedBooks[themeGroup.theme] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 mb-4 ml-4 divide-y divide-dashed border-l">
                          {themeGroup.books.map((book) => (
                            <BookCard
                              key={book.title + book.author}
                              title={book.title}
                              author={book.author}
                              number={book.number}
                            />
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="tech-stack" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 29}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tech Stack & Skills.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies I work with to build scalable systems and AI applications.
                </p>
              </div>
            </div>
          </BlurFade>
          <TechStack delay={BLUR_FADE_DELAY * 30} />
        </div>
      </section>

      <section id="privacy-research" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 31}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Privacy & Security Research.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Research on web privacy ecosystems, tracking behaviors, and privacy-aware system design.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 32}>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-3">Indian Web Privacy Ecosystem</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzed cookies, third-party trackers, and dark-pattern consent flows across Indian websites to understand privacy compliance and user data handling practices.
                  </p>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-3">Tracking Behavior Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Studied tracking behaviors and data flows in relation to emerging data protection regulations, focusing on compliance and transparency.
                  </p>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-3">AI-Driven Personalization</h3>
                  <p className="text-sm text-muted-foreground">
                    Explored how AI-driven personalization intersects with privacy, transparency, and compliance in large-scale systems.
                  </p>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-3">Privacy-Aware System Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Built analysis workflows to measure privacy signals at scale across websites, informing privacy-conscious backend and AI system design.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <ContactOrbiting delay={BLUR_FADE_DELAY * 36} />
    </main>
  );
}
