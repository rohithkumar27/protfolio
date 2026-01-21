import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Rohith Kumar Reddy",
  initials: "RKR",
  url: "https://rohithkumar27.github.io",
  location: "Massachusetts, USA",
  locationLink: "https://www.google.com/maps/place/massachusetts",
  description:
    "Master's in Computer Science @ UMass Amherst | Software Engineer exploring AI, Large-Scale Systems Infrastructure, SRE & Security",
  summary:
    "I build scalable backend systems, cloud-native services, and production-grade AI applications, with research experience in web privacy and domain-specific AI.\n\nCurrently pursuing Master's in Computer Science at UMass Amherst, where I'm exploring AI and large-scale systems infrastructure, SRE practices, and security. Previously worked as a Software Development Engineer at Publicis Sapient supporting 1M+ users in production banking environments.\n\nWhat drives me is the intersection of AI innovation and robust infrastructure - understanding how to build, secure, and scale intelligent systems that can handle real-world complexity. My work spans backend & distributed systems, cloud infrastructure, applied AI/GenAI, and security research.\n\nMy research includes building RAG systems for legal documents with DPO fine-tuning (30.6% improvement in retrieval accuracy) and studying web privacy ecosystems. Currently exploring how AI systems can be made more secure and reliable at scale.",
  avatarUrl: "/rohith.jpg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "rohit.tumati@gmail.com",
    tel: "+1-413-425-3300",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rohithkumar27",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohithkumar27/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:rohit.tumati@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Publicis Sapient",
      href: "https://www.publicissapient.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Software Development Engineer",
      logoUrl: "/publicis.jpeg",
      start: "Oct 2023",
      end: "Aug 2025",
      bullets: [
        "Built and shipped production-grade Python microservices supporting mission-critical pricing and identity verification systems used by 1M+ users",
        "Designed FastAPI-style REST APIs, relational schemas, and transactional workflows optimized for low latency and high throughput",
        "Developed TypeScript + React interfaces for internal and client-facing tools, collaborating closely with backend and product teams",
        "Implemented event-driven architectures (Kafka) to decouple services and improve system scalability under peak load",
        "Built AI-assisted analytics services using Python and NLP to extract insights from operational data, enabling early anomaly detection",
        "Owned features end-to-end—from design and implementation to deployment, monitoring, and production support in regulated environments"
      ],
    },
    {
      company: "CREW, SKDIV Industries",
      href: "https://crewtm.com/",
      badges: [],
      location: "Remote",
      title: "Backend Founding Engineer",
      logoUrl: "/crew.jpeg",
      start: "Aug 2022",
      end: "Sep 2023",
      bullets: [
        "Co-founded social media platform for gaming communities and developed backend services with Node.js, Redis, and Kafka, supporting matchmaking, chat, and community features",
        "Optimized event-driven microservices, improving real-time chat and notification throughput by 20%",
        "Seamlessly integrated ML recommendation services into production, enhancing matchmaking accuracy by 15%"
      ],
    },
    {
      company: "Publicis Sapient",
      href: "https://www.publicissapient.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Software Developer Intern",
      logoUrl: "/publicis.jpeg",
      start: "May 2022",
      end: "Jul 2022",
      bullets: [
        "Built a full-stack recruitment automation platform using Django REST, PostgreSQL, and React, reducing hiring cycle time by 40%",
        "Deployed services on AWS, gaining hands-on experience with autoscaling, monitoring, and production cloud systems"
      ],
    },
  ],
  education: [
    {
      school: "University of Massachusetts Amherst",
      href: "https://www.umass.edu",
      degree: "Master of Science in Computer Science",
      logoUrl: "/umass.jpeg",
      start: "Sep 2025",
      end: "May 2027",
    },
    {
      school: "Indian Institute of Technology Gandhinagar",
      href: "https://iitgn.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/iitgn.jpeg",
      start: "Aug 2019",
      end: "May 2023",
    },
  ],
  projects: [
    {
      title: "Meta-Enriched RAG for Legal LLMs",
      href: "https://github.com/SuyashManiyar/meta-enriched-rag-for-legal-llms",
      dates: "Aug 2024 - May 2025",
      active: true,
      description:
        "Designed a metadata-enriched Retrieval-Augmented Generation (RAG) system improving answer span recall by up to 30.6%. Integrated LLMs via APIs, prompt orchestration, and hybrid dense+sparse retrieval pipelines. Fine-tuned LLaMA 3.2 (3B) using DPO for domain-specific legal reasoning tasks.",
      technologies: [
        "Python",
        "LLaMA 3.2",
        "RAG",
        "DPO",
        "Legal AI",
        "PyTorch",
        "Hugging Face"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SuyashManiyar/meta-enriched-rag-for-legal-llms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Slide Scribe",
      href: "https://github.com/SuyashManiyar/HackUMass_codebase",
      dates: "2025",
      active: true,
      description:
        "HackUMass XIII Winner - Accessibility-focused mobile app for visually impaired students with real-time Q&A over classroom slides using WebRTC, OCR + LLM-based summarization. Selected among 300+ teams.",
      technologies: [
        "Flutter",
        "WebRTC",
        "OCR",
        "LLM",
        "Mobile",
        "Accessibility"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SuyashManiyar/HackUMass_codebase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "UniTrade",
      href: "https://github.com/rohithkumar27/UniTrade-Campus-Marketplace",
      dates: "2024",
      active: true,
      description:
        "Campus-exclusive marketplace platform built with Next.js, TypeScript, Node.js, PostgreSQL. Features real-time auctions, chat, notifications via Socket.IO, and AI-powered search using Google Gemini.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Socket.IO",
        "Google Gemini",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rohithkumar27/UniTrade-Campus-Marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cookie Privacy Analysis",
      href: "#",
      dates: "2023-2024",
      active: true,
      description:
        "Research project analyzing web privacy ecosystems and consent mechanisms. Built automated tools to study consent flows, dark patterns, and tracking behaviors across websites to understand user privacy interactions.",
      technologies: [
        "Python",
        "Web Scraping",
        "Privacy Analysis",
        "Consent Mechanisms",
        "Data Analysis",
        "Research"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  books: [
    {
      theme: "Backend & Distributed Systems",
      books: [
        {
          title: "Designing Data-Intensive Applications",
          author: "Martin Kleppmann",
          number: 1,
        },
        {
          title: "Building Microservices",
          author: "Sam Newman",
          number: 2,
        },
        {
          title: "System Design Interview",
          author: "Alex Xu",
          number: 3,
        },
      ],
    },
    {
      theme: "Cloud & Infrastructure",
      books: [
        {
          title: "Cloud Native Patterns",
          author: "Cornelia Davis",
          number: 4,
        },
        {
          title: "Kubernetes in Action",
          author: "Marko Lukša",
          number: 5,
        },
      ],
    },
    {
      theme: "AI & Machine Learning",
      books: [
        {
          title: "Hands-On Machine Learning",
          author: "Aurélien Géron",
          number: 6,
        },
        {
          title: "Deep Learning",
          author: "Ian Goodfellow",
          number: 7,
        },
      ],
    },
    {
      theme: "Privacy & Security",
      books: [
        {
          title: "The Age of Surveillance Capitalism",
          author: "Shoshana Zuboff",
          number: 8,
        },
        {
          title: "Privacy Engineering",
          author: "Michelle Finneran Dennedy",
          number: 9,
        },
      ],
    },
    {
      theme: "Software Engineering",
      books: [
        {
          title: "Clean Code",
          author: "Robert C. Martin",
          number: 10,
        },
        {
          title: "The Pragmatic Programmer",
          author: "David Thomas & Andrew Hunt",
          number: 11,
        },
      ],
    },
  ],
} as const;
