"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight, Heart, Mail, Sparkles, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site";

const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: softEase },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const nameParts = siteConfig.name.split(" ");
  const lastName = nameParts.pop();
  const firstNames = nameParts.join(" ");

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-dots absolute inset-0 opacity-70" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-200/50 blur-3xl dark:bg-blush-500/10" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-peach-200/50 blur-3xl dark:bg-peach-500/10" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-100/40 blur-3xl dark:bg-rose-500/10" />
      </div>

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        className="relative mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
      >
        <div className="text-center lg:text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Software Developer | Full Stack Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {firstNames}{" "}
            <span className="text-blush-600 dark:text-blush-300">
              {lastName}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Hi, I&apos;m Hanan — a full-stack developer who believes the best
            software feels human. I love turning thoughtful ideas into warm,
            useful digital experiences, from the first sketch to the final
            deploy.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-plush transition-colors hover:bg-blush-400 sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Heart className="h-3.5 w-3.5 text-blush-500" />
            Building with care, one soft detail at a time.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blush-200/70 via-peach-100/50 to-cream-200/70 blur-2xl dark:from-blush-500/15 dark:via-peach-500/10 dark:to-rose-500/10"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.75rem] border border-border bg-card shadow-plush">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,182,200,0.45),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(230,160,176,0.18),transparent_60%)]"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-100 text-blush-600 shadow-soft dark:bg-blush-500/15 dark:text-blush-300">
                <UserRound className="h-7 w-7" />
              </span>
              <p className="font-display text-lg font-semibold">
                Your photo here
              </p>
              <p className="max-w-[14rem] text-xs leading-relaxed text-muted-foreground">
                A personal portrait will live in this soft little frame.
              </p>
            </div>
          </div>

          <motion.span
            aria-hidden
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-blush-500 shadow-soft"
          >
            <Sparkles className="h-4 w-4" />
          </motion.span>

          <motion.span
            aria-hidden
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute -left-3 bottom-12 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-peach-500 shadow-soft"
          >
            <Heart className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
