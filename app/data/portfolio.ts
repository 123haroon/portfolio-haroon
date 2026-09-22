import {
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

//   Experience,
//   Project,
//   SkillGroup,
//   Technology,
import {
  Technology,
  SkillGroup,
  Project,
  Experience,
} from "../types/portfolio";

export const technologies: Technology[] = [
  {
    id: 1,
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 3,
    name: "React.js",
    icon: SiReact,
  },
  {
    id: 4,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 5,
    name: "HTML5",
    icon: SiHtml5,
  },
  {
    id: 6,
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    id: 8,
    name: "Git",
    icon: SiGit,
  },
  {
    id: 9,
    name: "GitHub",
    icon: SiGithub,
  },
  {
    id: 10,
    name: "Vercel",
    icon: SiVercel,
  },
  {
    id: 11,
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    id: 12,
    name: "Express.js",
    icon: SiExpress,
  },
  {
    id: 13,
    name: "Postman",
    icon: SiPostman,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "State & React",
    skills: [
      "Zustand",
      "React Hooks",
      "Controlled Forms",
      "Component Architecture",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "Development Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
  },
  {
    id: 4,
    title: "Backend Fundamentals",
    skills: [
      "Node.js",
      "Express.js",
      "Database Connectivity",
      "Basic REST APIs",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Revive Medical Technologies",
    duration: "Sep 2025 – Oct 2025",
    description:
      "Gained practical experience in web development, responsive user interfaces and modern development workflows while strengthening frontend development skills.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Clone",
    description:
      "A responsive Amazon clone built with Next.js, TypeScript and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/123haroon/amazon-clone",
    live: "https://amazon-xi-one.vercel.app/",
  },
  {
    id: 2,
    title: "Real-state",
    description:
      "A responsive Amazon clone built with Next.js, TypeScript and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/123haroon/real-state-web",
    live: "https://real-state-web-puce.vercel.app/",
  },
];
