"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site";

const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: softEase },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const nameParts = siteConfig.name.split(" ");
  const lastName = nameParts.pop();
  const firstNames = nameParts.join(" ");

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-20 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-squares absolute inset-0" />
        <div className="absolute -left-28 top-4 h-80 w-80 rotate-12 rounded-[4rem] bg-gradient-to-br from-blush-200/40 via-cream-100/30 to-transparent blur-3xl dark:from-blush-500/10 dark:via-rose-500/5" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 -rotate-6 rounded-[5rem] bg-gradient-to-tl from-peach-100/40 via-rose-100/30 to-transparent blur-3xl dark:from-peach-500/10 dark:via-rose-500/5" />
      </div>

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        className="relative mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
      >
        <div className="text-center lg:text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full border border-border/70 bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur"
          >
            Software Developer | Full Stack Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {firstNames}{" "}
            <span className="text-blush-600 dark:text-blush-300">
              {lastName}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Hi, I&apos;m Hanan — a full-stack developer who believes the best
            software feels human. I love turning thoughtful ideas into warm,
            useful digital experiences, from the first sketch to the final
            deploy.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-plush transition-colors hover:bg-blush-400 sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 text-xs tracking-wide text-muted-foreground/80"
          >
            Building with care, one soft detail at a time.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div
            aria-hidden
            className="photo-blob absolute -inset-6 bg-gradient-to-br from-blush-200/50 via-peach-100/40 to-cream-200/40 blur-2xl dark:from-blush-500/15 dark:via-peach-500/10 dark:to-rose-500/10"
          />

          <div
            aria-hidden
            className="photo-blob absolute inset-0 translate-x-3 translate-y-3 rotate-3 border border-blush-200/50 bg-gradient-to-br from-blush-100/80 via-cream-100/60 to-peach-100/60 shadow-soft dark:border-blush-500/20 dark:from-blush-500/10 dark:via-rose-500/5 dark:to-peach-500/5"
          />

          <div className="photo-blob photo-depth relative aspect-[4/5] overflow-hidden border border-white/60 bg-card dark:border-white/10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.9),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.08),transparent_55%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-blush-100/70 via-cream-50/40 to-peach-100/60 dark:from-blush-500/10 dark:via-transparent dark:to-rose-500/10"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 px-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/60 text-blush-500 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-blush-300">
                <UserRound className="h-7 w-7" />
              </span>
              <p className="font-display text-lg font-semibold">
                Your photo here
              </p>
              <p className="max-w-[13rem] text-xs leading-relaxed text-muted-foreground">
                A soft little space for a personal portrait.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
