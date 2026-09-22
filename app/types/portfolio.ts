import { IconType } from "react-icons";
export type Technology = {
  id: number;
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  id: number;
  title: string;
  skills: string[];
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
};
