"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
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
    <section className="relative overflow-hidden px-6 pb-14 pt-10 sm:px-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-4 h-80 w-80 rotate-12 rounded-[4rem] bg-gradient-to-br from-blush-200/40 via-cream-100/30 to-transparent blur-3xl dark:from-blush-500/10 dark:via-rose-500/5" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 -rotate-6 rounded-[5rem] bg-gradient-to-tl from-peach-100/40 via-rose-100/30 to-transparent blur-3xl dark:from-peach-500/10 dark:via-rose-500/5" />
      </div>

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex max-w-full items-center justify-center rounded-full border border-border/70 bg-card/80 px-4 py-1.5 text-center text-xs font-medium leading-relaxed text-muted-foreground shadow-soft backdrop-blur"
        >
          AI Enthusiast · Full-Stack &amp; Frontend Developer
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          {firstNames}{" "}
          <span className="text-blush-600 dark:text-blush-300">
            {lastName}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Hi, I&apos;m Hanan — a full-stack developer who loves making things
          for the fun of it, honestly. I care about not just the usability of
          the site I&apos;m working on but also the little details, and building
          products that feel easy and genuinely nice to use but also pretty.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
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
      </motion.div>
    </section>
  );
}
