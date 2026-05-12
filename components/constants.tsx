import { Github, Linkedin, Mail, Instagram, Cpu, Zap, Terminal } from 'lucide-react';
import { Project, Experience, Skill, SocialLink } from './types';

// --- PERSONAL INFO ---
export const PERSONAL_INFO = {
  name: "Aayush Tejani",
  tagline: "Vibe Coding & AI Automation Enthusiast",
  about: "I’m Aayush Tejani, a Computer Engineering student at MBIT, Anand – Vallabh Vidyanagar, focused on building modern, high-performance digital experiences. I have a strong programming foundation in C, C++, Java, and Python, with a solid understanding of problem-solving and core engineering principles. Alongside this, I am actively exploring JavaScript, React, and Next.js to build modern web interfaces, and I experiment with Three.js to introduce purposeful motion where it enhances the experience. I value clean architecture, smooth interaction, and thoughtful design—where engineering precision meets modern aesthetics.",
  email: "tejaniaayush0@gmail.com",
  // Using a placeholder image so the UI looks good immediately.
  // To use your own image:
  // 1. Place 'port.png' in the 'public/image/' folder.
  // 2. Change this line to: profileImage: "/image/port.png",
  profileImage: "https://res.cloudinary.com/drk1cccm1/image/upload/v1765904761/ceo1_b33aad.jpg",
};

// --- SKILLS ---
export const SKILLS: Skill[] = [
  { name: "Next.js / React", level: 60 },
  { name: "TypeScript", level: 70 },
  { name: "Python / AI", level: 80 },
  { name: "C / C++", level: 87 },
  { name: "AI Automation", level: 73 },
  { name: "Java (Basic)", level: 60 },
];

export const CORE_COMPETENCIES = [
  { title: "Vibe Coding", icon: Zap, desc: "Rapid prototyping and efficient, creative coding solutions." },
  { title: "AI Automation", icon: Cpu, desc: "Implementing practical AI agents and workflow automation." },
  { title: "Full Stack Eng.", icon: Terminal, desc: "Robust applications using Next.js, TS, and Python." },
];

// --- PROJECTS ---
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "LeadFlow CRM",
    description: "A powerful Client Lead Management System (Mini CRM) designed for efficient customer relationship management, lead tracking, and sales pipeline automation.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "https://res.cloudinary.com/dgooxgtna/image/upload/v1778500776/Screenshot_2026-05-11_172850_d6xywx.png",
    link: "https://lead-flow-1002.vercel.app",
    github: "https://github.com/Aayush92100/LeadFlow"
  },
  {
    id: "2",
    title: "Khodal Sofa Website",
    description: "A premium sofa and furniture e-commerce platform featuring interactive 3D product visualization, smooth animations, and modern design. Master manufacturing since 2013.",
    technologies: ["React 18", "Vite", "Three.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: "https://res.cloudinary.com/dgooxgtna/image/upload/v1778500821/Screenshot_2026-05-11_172914_zqpwcn.png",
    link: "https://khodalsofa.vercel.app",
    github: "https://github.com/Aayush92100/khodal-sofa-website"
  },
  {
    id: "3",
    title: "WellnessSynergy",
    description: "A wellness platform that combines ancestral wisdom with modern performance science to create a flow-state experience through curated mindfulness, vitality, and recovery features.",
    technologies: ["React.js", "Vite", "Framer Motion", "Node.js", "MongoDB"],
    imageUrl: "/images/wellnesssynergy-project.png",
    link: "https://wellnesssynergy.vercel.app",
    github: "https://github.com/Aayush92100/wellnesssynergy"
  },
];

// --- EXPERIENCE ---
export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Computer Engineering Student",
    company: "College in Anand",
    period: "2021 - Present (3rd Year)",
    description: "Pursuing B.Tech in Computer Engineering. Focusing on Data Structures, Algorithms, and System Design. Leading peer learning groups for Web Technologies."
  },
  {
    id: "2",
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Building responsive web applications and automation scripts for clients using Next.js and Python. Focusing on practical implementations of AI tools."
  },
  {
    id: "3",
    role: "Open Source Contributor",
    company: "GitHub",
    period: "2022 - Present",
    description: "Actively contributing to open-source repositories involving TypeScript and Automation tools. Exploring new libraries and 'vibe coding' techniques."
  }
];

// --- SOCIALS ---
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Aayush92100", icon: Github },
  { platform: "Instagram", url: "https://instagram.com/aayyyushh_20", icon: Instagram },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/tejani-aayush-138824349", icon: Linkedin },
];