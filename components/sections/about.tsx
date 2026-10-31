"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import mePhoto from "@/images/me.jpg";

const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: softEase },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: softEase },
  },
};

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Section header: About Me label */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blush-600 dark:text-blush-300">
              About Me
            </span>
          </motion.div>

          {/* Grid starting parallel with the core text */}
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left: Core writings */}
            <motion.div variants={fadeUp} className="space-y-5 lg:col-span-7">
            
              <p className="text-base leading-relaxed text-justify text-muted-foreground sm:text-lg">
               Growing up I was a kid who loved solving things and was curious about literally anything. I started learning basic web development on an app called SoloLearn and I loved it. I was fascinated by how you could create something interactive and dynamic with just lines of code. I decided to study Software Engineering. I love adding my own personal touch to the projects I'm doing mostly I use the color pink or any girly color cause that's my signature style. I love to make things that are not only functional but also visually appealing. I believe that good design can enhance the user experience and make it more enjoyable. I also have a passion for learning new technologies and keeping up with the latest trends in the industry. I'm always looking for ways to improve my skills and create better products.

              </p>
            </motion.div>

            {/* Right: Balanced, moderately-sized photo aligned with the core text, no subtitle, subtle tiny name */}
            <motion.div
              variants={photoVariants}
              className="flex flex-col items-center lg:col-span-5 lg:items-end"
            >
              <div className="w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px]">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-soft">
                  <Image
                    src={mePhoto}
                    alt="Hanan Seid"
                    fill
                    priority
                    sizes="(min-width: 1024px) 23rem, (min-width: 640px) 21rem, 20rem"
                    className="object-cover object-[center_30%]"
                  />
                </div>

                <div className="mt-2.5 text-center lg:text-right">
                  <p className="text-xs font-normal tracking-wide text-muted-foreground">
                    Hanan Seid
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
