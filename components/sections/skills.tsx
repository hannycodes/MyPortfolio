"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Wrench,
  Database,
  Cpu,
  Palette,
} from "lucide-react";

const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export interface SkillCategory {
  title: string;
  description: string;
  icon: typeof Code2;
  skills: {
    name: string;
    level?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & UI",
    description: "Beautiful interfaces with modern tools and aesthetic designs.",
    icon: Palette,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Designing backend architectures and RESTful APIs.",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "AI Tools",
    description: "Using AI to build project documentation and implementing with modern developer tools.",
    icon: Cpu,
    skills: [
      { name: "Claude AI" },
      { name: "OpenAI APIs" },
      { name: "ChatGPT" },
      { name: "Antigravity AI" },
      {name: "Gemini / Google AI Studio"}
    ],
  },
  {
    title: "Workflow & Tools",
    description: "Version control, deployment pipelines, and developer environments.",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Figma (UI Design)" },
      { name: "npm / pnpm" },
      { name: "Render" }
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: softEase },
  },
};

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Section header: matching About & Projects */}
          <motion.div variants={cardVariants} className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blush-600 dark:text-blush-300">
              Skills &amp; Technologies
            </span>
            <p className="mt-2 max-w-xl text-base text-muted-foreground">
              A breakdown of the languages, frameworks, and creative tools I use to bring ideas to life.
            </p>
          </motion.div>

          {/* 4 Category Cards in a clean, balanced 2x2 grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blush-300/80 hover:bg-card hover:shadow-plush dark:hover:border-blush-500/40 sm:p-7"
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blush-100/70 text-blush-600 transition-colors group-hover:bg-blush-200/80 dark:bg-blush-500/15 dark:text-blush-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-blush-600 dark:group-hover:text-blush-300">
                        {category.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills pill tags */}
                  <div className="mt-6 pt-5 border-t border-border/60">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center rounded-xl border border-border/70 bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:scale-105 hover:border-blush-300/80 hover:bg-blush-50/70 hover:text-blush-700 dark:hover:border-blush-500/30 dark:hover:bg-blush-500/15 dark:hover:text-blush-300"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
