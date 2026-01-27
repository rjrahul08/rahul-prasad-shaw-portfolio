import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  shortSummary: string;
  problem: string;
  solution: string;
  stack: string[];
  metrics: string;
  link: string;
}

export const PROFILE = {
  name: "RAHUL PRASAD SHAW",
  role: "Software Developer | Backend, AI & Cloud",
  tagline: "Software Developer focused on building scalable backend systems and AI-driven automation in production environments.",
  location: "Kolkata, India",
  status: "OPEN TO OPPORTUNITIES",
  email: "rj08rahul@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/rahul-shaw008",
    github: "https://github.com/rjrahul08"
  }
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Software Developer",
    company: "RoboAnalytics",
    period: "Jan 2024 - Present",
    focus: "Backend Architecture & Scale",
    description: "Developed and scaled high-traffic SaaS products using Python Flask and Node.js. Designed modular RESTful APIs and optimized AWS-based background processing pipelines. Addressed scalability bottlenecks by decoupling monolithic tasks into asynchronous services, achieving a ~30% reduction in average response latency. Integrated deterministic AI automation workflows for real-time data analysis, ensuring high reliability in production.",
    metrics: ["Latency -30%", "Async Architecture", "Production AI Ops"]
  }
];

export const EDUCATION = {
  degree: "B.Sc. in Computer Science",
  institution: "New Alipore College, University of Calcutta",
  year: "2021",
  gpa: "CGPA: 7.29"
};

export const PROJECTS: Project[] = [
  {
    id: "proj_01",
    title: "LINKOMATIC",
    category: "Distributed Automation Engine",
    shortSummary: "Serverless automation engine for complex decision workflows.",
    problem: "Manual similarity scoring and decision trees were unscalable and error-prone at volume.",
    solution: "Architected a serverless state machine using AWS Lambda/S3. Implemented vector-based scoring logic to automate decision paths with high consistency.",
    stack: ["Python", "Serverless", "AWS Lambda", "S3"],
    metrics: "Zero-Downtime Scaling",
    link: "#"
  },
  {
    id: "proj_02",
    title: "MARKET DATA PIPELINE",
    category: "High-Throughput Backend",
    shortSummary: "Secure ingestion pipeline for high-velocity financial market data.",
    problem: "Existing ingestion methods lacked the throughput and security controls required for real-time analysis.",
    solution: "Designed an async ingestion layer with strict data sanitization and isolation. Optimized database writes for heavy read/write concurrency.",
    stack: ["Python", "Async Processing", "Data Security"],
    metrics: "High-Integrity Data",
    link: "#"
  },
  {
    id: "proj_03",
    title: "ADAPTIVE INTERVIEW SYSTEM",
    category: "LLM Orchestration",
    shortSummary: "Context-aware evaluation engine for technical interviewing.",
    problem: "Standardizing technical assessment requires maintaining context across multi-turn conversations.",
    solution: "Built a stateful orchestration layer for LLMs. Implemented prompt chaining to separate conversation flow from evaluation logic, reducing hallucination risks.",
    stack: ["Python", "LLM Orchestration", "React.js"],
    metrics: "Context Retention",
    link: "#"
  },
  {
    id: "proj_04",
    title: "COMPONENT ABSTRACTION LAYER",
    category: "System Tooling",
    shortSummary: "Unified configuration engine for UI component generation.",
    problem: "Fragmented input sources (URL, Text, Image) led to inconsistent component generation and high maintenance.",
    solution: "Developed a normalization middleware that abstracts diverse inputs into a standardized internal schema before generation.",
    stack: ["TypeScript", "API Design", "React"],
    metrics: "Unified Schema",
    link: "#"
  }
];

export const SKILLS = {
  core_stack: ["Python", "JavaScript", "TypeScript"],
  backend_systems: ["Flask", "Node.js", "Express", "REST Architecture"],
  infrastructure: ["AWS (Lambda, S3, EC2)", "Docker", "CI/CD Pipelines"],
  data_ai: ["LLM Orchestration", "Prompt Engineering", "MySQL", "MongoDB"]
};
