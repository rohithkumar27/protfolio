import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Rohith Kumar Reddy",
  initials: "RKR",
  url: "https://rohithkumar27.github.io",
  location: "Massachusetts, USA",
  locationLink: "https://www.google.com/maps/place/massachusetts",
  description:
    "Master's in Computer Science @ UMass Amherst | Software Engineer specializing in Backend, Cloud, Applied AI & Privacy",
  summary:
    "I build scalable backend systems, cloud-native services, and production-grade AI applications, with a strong interest in privacy-aware system design.\n\nCurrently pursuing Master's in Computer Science at UMass Amherst. Previously worked as a Software Development Engineer at Publicis Sapient (Lloyds Banking Group) and as a Backend Founding Engineer at CREW, SKDIV Industries.\n\nI enjoy working at the intersection of systems, data, and real-world impact. My work spans backend & distributed systems, cloud infrastructure, applied AI/GenAI, and privacy & security research.\n\nI'm deeply interested in how large-scale systems and AI applications handle user data, having conducted research on legal document processing and built AI-assisted reporting systems for enterprise banking users.",
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
      company: "Publicis Sapient | Lloyds Banking Group",
      href: "https://www.publicissapient.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Software Development Engineer",
      logoUrl: "/publicis.jpeg",
      start: "Oct 2023",
      end: "Aug 2025",
      bullets: [
        "Built responsive UI interfaces in React using custom hooks and state management, improving usability and maintainability across features",
        "Designed and implemented backend microservices for the Strategic Pricing Engine and OKYC workflows supporting 1M+ business users in regulated production banking environments",
        "Implemented robust relational database schemas with indexes, constraints using Hibernate/JPA, ensuring data consistency and low-latency access across microservices",
        "Developed AI-assisted reporting functionality using Python, Gemini, and SQL, enabling business users to self-serve insights and reducing report generation time by 40%"
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
        "Co-founded social media platform for gaming communities and developed backend services with Node.js, Redis, and Kafka, supporting matchmaking, chat, and community features for 100k+ players",
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
        "Built a cloud-based recruitment automation platform, reducing hiring cycle by 40%, leveraging AI-driven scheduling and candidate ranking algorithms",
        "Developed scalable backend with Django + PostgreSQL, integrating Microsoft Graph API and data pipelines for real-time candidate analytics, achieving 99.9% uptime on AWS"
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
      title: "Slide Scribe",
      href: "https://github.com/SuyashManiyar/HackUMass_codebase",
      dates: "2024",
      active: true,
      description:
        "HackUMass XIII Winner - Accessibility-focused mobile app for visually impaired students with real-time Q&A over classroom slides using WebRTC, OCR + LLM-based summarization.",
      technologies: [
        "React Native",
        "WebRTC",
        "OCR",
        "LLM",
        "Mobile",
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
      title: "Meta-Enriched RAG for Legal LLMs",
      href: "https://github.com/SuyashManiyar/meta-enriched-rag-for-legal-llms",
      dates: "2024",
      active: true,
      description:
        "Research-grade Retrieval-Augmented Generation system with metadata-enriched RAG pipeline for legal documents. Improved retrieval span recall by 30.6% and fine-tuned LLaMA 3.2 (3B) using DPO.",
      technologies: [
        "Python",
        "LLaMA",
        "RAG",
        "DPO",
        "Legal AI",
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
      title: "AI-Assisted Reporting (Industry Project)",
      href: "#",
      dates: "2023-2024",
      active: false,
      description:
        "LLM-powered analytics for enterprise banking users. Built AI-assisted reporting using Python + SQL + LLMs, reduced report generation time by 40% in production.",
      technologies: [
        "Python",
        "SQL",
        "LLM",
        "Enterprise",
        "Banking",
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
