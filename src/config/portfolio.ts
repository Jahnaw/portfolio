/**
 * Portfolio content for Jahnawi Agrawal.
 * Keep claims grounded in shipped projects and documented experience.
 */
import type { LucideIcon, LucideProps } from "lucide-react";
import { Code2, Boxes, Database, Cloud, BrainCircuit } from "lucide-react";

export const personal = {
  name: "Jahnawi Agrawal",
  shortName: "Jahnawi",
  role: "Software Engineer",
  tagline: "I build backend systems and full-stack products that solve practical problems.",
  rotatingRoles: ["Software Engineer", "Backend Developer", "Full-Stack Developer", "AI Integration"],
  avatar: "/images/avatar.svg",
  avatarAlt: "Decorative JA monogram artwork for Jahnawi Agrawal",
  portrait: "/images/portrait.svg",
  portraitAlt: "Decorative JA monogram artwork for Jahnawi Agrawal",
  shortBio: "I'm a Computer Science undergraduate at Madan Mohan Malaviya University of Technology, interested in backend engineering, full-stack development and practical AI applications.",
  longBio: [
    "I'm pursuing a B.Tech in Computer Science and Engineering at Madan Mohan Malaviya University of Technology. I enjoy understanding how systems work behind the interface — from API design and databases to authentication, concurrency and deployment.",
    "I've built projects across backend engineering, full-stack development and AI-powered applications. I also interned as a Software Development Engineer Intern at Amazon, where I worked on production backend services, monitoring and database improvements.",
    "Outside projects, I regularly practise data structures and algorithms and take part in coding contests and hackathons."
  ],
  location: "India",
  timezone: "IST (UTC+5:30)",
  email: "jahnawiagrawal@gmail.com",
  availableForWork: true,
  availableForWorkText: "Open to SDE / Backend / Full-Stack roles",
  resume: null,
  seo: {
    title: "Jahnawi Agrawal — Software Engineer",
    description: "Software Engineer focused on backend systems, full-stack development and AI integration. Explore my projects, experience and technical work."
  }
} as const;

export interface SocialLink {
  label: string;
  href: string;
  primary?: boolean;
  description?: string;
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Jahnaw", primary: true, description: "GitHub profile of Jahnawi Agrawal" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jahnawi-agrawal-1635b7284", primary: true, description: "LinkedIn profile of Jahnawi Agrawal" }
];

export const heroActions: ReadonlyArray<{ label: string; href: string; primary?: boolean }> = [
  { label: "See my work", href: "/projects", primary: true },
  { label: "About me", href: "/about" },
  { label: "Get in touch", href: "/contact" }
];

export const heroStats = [
  { value: 1920, suffix: "", label: "LeetCode rating", hint: "Knight badge" },
  { value: 500, suffix: "+", label: "DSA problems", hint: "Across coding practice platforms" },
  { value: 2, suffix: "★", label: "CodeChef", hint: "Two-star rating" },
  { value: 15, suffix: "K", label: "Google Big Code", hint: "Top 15K finish" }
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" }
] as const;

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export const services: Service[] = [
  { icon: Database, title: "Backend engineering", description: "Building REST APIs, authentication flows, data models and backend logic with attention to reliability and security.", skills: ["Java", "Node.js", "Express.js", "MongoDB"] },
  { icon: Boxes, title: "Full-stack development", description: "Taking web applications from frontend integration through API design, persistence and deployment.", skills: ["React", "JavaScript", "Node.js"] },
  { icon: BrainCircuit, title: "AI-powered applications", description: "Integrating language models and agent workflows into useful applications and user experiences.", skills: ["Python", "LangChain", "LangGraph", "LLM APIs"] }
] as const;

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Languages", icon: Code2, skills: ["Java", "JavaScript", "Python", "C", "SQL"] },
  { title: "Backend & Databases", icon: Database, skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Redis"] },
  { title: "Frontend", icon: Boxes, skills: ["React", "Vite", "HTML", "CSS"] },
  { title: "Cloud & Developer Tools", icon: Cloud, skills: ["AWS CloudWatch", "Git", "GitHub", "Postman"] },
  { title: "AI & Agent Workflows", icon: BrainCircuit, skills: ["LangChain", "LangGraph", "Llama 3.1", "LLM API integration"] }
] as const;

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  status?: "current" | "past";
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    period: "Jun 2025 – Jul 2025",
    location: "India",
    summary: "Worked on production backend services, improving observability, database performance and operational efficiency.",
    highlights: [
      "Instrumented Java services with 10+ CloudWatch metrics across 5+ critical endpoints to monitor API latency, error rates and database performance.",
      "Built and deployed 15+ CloudWatch alarms and 3 monitoring dashboards, improving on-call responsiveness by 35%.",
      "Optimized database schemas and query execution paths, improving query performance by 20%.",
      "Automated monitoring and alerting workflows, reducing manual operational overhead by 40%."
    ],
    tech: ["Java", "AWS CloudWatch", "Monitoring & Alerting", "Backend Services"],
    status: "past"
  }
] as const;

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
  tech: string[];
  year: string;
  status?: "live" | "building" | "archived";
  featured?: boolean;
  links?: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
  highlights?: string[];
  proudest?: string;
}

export const projects: Project[] = [
  {
    slug: "api-rate-limiting-gateway",
    title: "Distributed API Rate Limiting Gateway",
    summary: "A distributed gateway that authenticates API-key clients and enforces configurable request limits.",
    description: [
      "Built a centralized API gateway supporting 100+ API-key-based clients with programmatic onboarding and authentication.",
      "Implemented distributed Fixed Window and Token Bucket rate-limiting algorithms using Redis, with configurable per-client and per-endpoint policies. In simulated load tests, the project throttled excess traffic by 60%.",
      "Added Redis-based request-validation caching, reducing database hits by 50%, and developed global and client-level metrics to monitor usage and rate-limit violations."
    ],
    image: "/images/projects/api-gateway.svg",
    tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "REST APIs"],
    year: "2026",
    status: "live",
    featured: true,
    links: { live: "https://api-rate-limiter-gateway.onrender.com", repo: "https://github.com/Jahnaw/api-rate-limiter-gateway" },
    highlights: ["API-key based client authentication", "Fixed Window and Token Bucket algorithms", "Configurable per-client and per-endpoint limits", "Redis-backed request control and validation caching"],
    proudest: "Supporting multiple rate-limiting strategies while keeping request enforcement distributed through Redis."
  },
  {
    slug: "smart-entry-exit",
    title: "Smart Entry-Exit System",
    summary: "A campus entry and exit system using QR validation, device binding and GPS geofencing.",
    description: [
      "Developed the backend logic for a campus entry-exit application. Students authenticate, register a device, scan a gate QR code and submit their location for server-side geofence validation.",
      "The backend records ENTRY or EXIT events and exposes attendance history and administrative gate-management functionality. The frontend UI was developed with a teammate."
    ],
    image: "/images/projects/smart-entry-exit.svg",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Geolocation"],
    year: "2026",
    status: "building",
    featured: true,
    links: { live: "https://smart-entry-exit.onrender.com/", repo: "https://github.com/Jahnaw/smart-entry-exit" },
    highlights: ["JWT authentication and device registration", "QR-based gate identification", "Server-side GPS geofence validation", "Attendance history and gate management"]
  },
  {
    slug: "dhanease",
    title: "DhanEase — AI Financial Advisor",
    summary: "A full-stack personal finance application with an AI-powered financial advisor.",
    description: [
      "Designed and developed 10+ RESTful APIs for expense tracking, analytics and core financial workflows supporting 100+ users.",
      "Implemented JWT authentication and role-based access control, optimized MongoDB queries and indexes to reduce average API response latency by 30%, and integrated an AI-powered chatbot advisor."
    ],
    image: "/images/projects/dhanease.svg",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    year: "2026",
    status: "live",
    featured: true,
    links: { live: "https://dhan-ease.vercel.app/", repo: "https://github.com/Jahnaw/DhanEase" },
    highlights: ["10+ RESTful APIs for financial workflows", "JWT authentication and role-based access control", "MongoDB query and indexing optimization", "AI-powered financial advisor"]
  },
  {
    slug: "ai-agent-chatbot",
    title: "AI Agent Chatbot",
    summary: "A tool-using conversational agent with persistent memory and multiple chat threads.",
    description: [
      "Built an agentic chatbot using LangGraph and Llama 3.1, with a Streamlit interface and SQLite-backed conversation persistence.",
      "The agent can use tools for web search, arithmetic calculations and stock-price lookups. Conversation state is checkpointed so users can continue across chat threads."
    ],
    image: "/images/projects/ai-agent-chatbot.svg",
    tech: ["Python", "LangGraph", "LangChain", "Llama 3.1", "Streamlit", "SQLite"],
    year: "2026",
    status: "building",
    featured: true,
    links: { repo: "https://github.com/Jahnaw/Chatbot" },
    highlights: ["Tool-using agent workflow", "Persistent conversations with SQLite checkpointing", "Multiple chat threads"]
  }
];

export const projectTags = [
  "Java", "Spring Boot", "Redis", "PostgreSQL", "REST APIs", "Node.js",
  "Express.js", "MongoDB", "React", "Python", "LangGraph", "JWT", "Llama 3.1"
] as const;

export const highlights = [
  { label: "Education", value: "B.Tech CSE · MMMUT · CGPA 8.55/10" },
  { label: "Problem solving", value: "LeetCode Knight · 1920 rating · 500+ DSA problems" },
  { label: "Competition", value: "Top 15K · Google Big Code Challenge" },
  { label: "Hackathon", value: "2nd Place · HackBlitz, GDG On Campus" },
  { label: "Community", value: "Executive Member · Management Editorial Mentor, GDG On Campus MMMUT" },
  { label: "Coding profile", value: "CodeChef 2★ · HackerRank 5★" }
] as const;

export const seo = {
  title: personal.seo.title,
  description: personal.seo.description,
  keywords: ["Jahnawi Agrawal", "software engineer", "backend developer", "full-stack developer", "Java", "Node.js", "React", "AI"],
  siteUrl: "https://jahnawi-portfolio.vercel.app",
  repository: "https://github.com/Jahnaw/jahnawi-portfolio",
  author: personal.name,
  license: "MIT",
  twitter: ""
} as const;

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const sectionIds = {
  about: "about",
  services: "services",
  skills: "skills",
  work: "work",
  experience: "experience",
  contact: "contact"
} as const;

export type IconComponent = LucideIcon;
export type { LucideProps };
