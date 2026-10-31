"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ExternalLink, ImageIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social-icons";
import legashImg from "@/images/legash.png";

const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  /** Image source: imported StaticImageData or URL string path e.g. "/images/projects/project1.png" */
  image?: StaticImageData | string;
}

// Initial 3 projects ready for your actual pictures, descriptions and links
export const defaultProjects: ProjectItem[] = [
  {
    id: "Legash",
    title: "Legash",
    tagline: "Website",
    description:
      "Lead developer of a responsive , full stack website for a smart blood donation system that also have a mobile application for donors.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Legash-Team/Frontend",
    liveUrl: "https://legash-ob55.onrender.com/",
    image: legashImg,
  },
  {
    id: "project-2",
    title: "Project Two",
    tagline: "Creative & Functional Tool",
    description:
      "Designed with a thoughtful aesthetic and intuitive user flow. Focused on problem solving with delight and ease of use.",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/hannycodes",
    liveUrl: "https://example.com",
    image: undefined,
  },
  {
    id: "project-3",
    title: "Project Three",
    tagline: "AI-Powered Experience",
    description:
      "Explores modern machine learning integrations with an accessible frontend interface and real-time interactive feedback.",
    tags: ["Python", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/hannycodes",
    liveUrl: "https://example.com",
    image: undefined,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export function ProjectsSection({
  projects = defaultProjects,
}: {
  projects?: ProjectItem[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Section header: clean & simple */}
          <motion.div variants={cardVariants} className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blush-600 dark:text-blush-300">
              Projects
            </span>
            <p className="mt-2 max-w-xl text-base text-muted-foreground">
              A collection of projects (not much presented but trust me i built a lot) I&apos;ve built with the knowledge and resources i had.
            </p>
          </motion.div>

         
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, index) => {
              const isThirdCard = index === 2;

              return (
                <motion.article
                  key={project.id}
                  variants={cardVariants}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blush-300/80 hover:bg-card hover:shadow-plush dark:hover:border-blush-500/40 ${
                    isThirdCard
                      ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-xl"
                      : ""
                  }`}
                >
                  {/* Project Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/70 bg-gradient-to-br from-blush-50/70 via-cream-100/50 to-peach-50/60 dark:from-blush-950/20 dark:via-card dark:to-peach-950/20">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 32rem, (min-width: 640px) 28rem, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Placeholder state ready for user's actual screenshot */
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-muted-foreground">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card/80 text-blush-500 shadow-soft transition-transform duration-300 group-hover:scale-110 dark:bg-card/90 dark:text-blush-300">
                          <ImageIcon className="h-6 w-6" />
                        </div>
                        <p className="text-xs font-medium text-foreground/80">
                          Project Screenshot
                        </p>
                        <p className="text-[11px] text-muted-foreground/80">
                          Add your project image here
                        </p>
                      </div>
                    )}

                    {/* Subtle top index badge */}
                    <span className="absolute right-4 top-4 rounded-full border border-border/70 bg-card/90 px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted-foreground shadow-soft backdrop-blur">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Project Details Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-blush-600 dark:group-hover:text-blush-300 sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                        {project.tagline}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border/60">
                      {/* Tech stack badge list */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-lg border border-border/60 bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-blush-200 group-hover:bg-blush-50/60 dark:group-hover:border-blush-500/20 dark:group-hover:bg-blush-500/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links: GitHub with Icon + Live URL */}
                      <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <GitHubIcon className="h-4 w-4 fill-current" />
                          <span>Code Repository</span>
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-blush-100/70 px-3.5 py-1.5 text-xs font-semibold text-blush-700 transition-colors hover:bg-blush-200 hover:text-blush-900 dark:bg-blush-500/15 dark:text-blush-300 dark:hover:bg-blush-500/25"
                            aria-label={`${project.title} Live demo`}
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
