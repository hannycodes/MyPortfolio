"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
} from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  InstagramIcon,
} from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site";

const softEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

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

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form states
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSending(true);

    // Creates a prefilled mailto so the message goes directly to your email
    const subject = encodeURIComponent(
      senderName ? `Message from ${senderName} (Portfolio)` : "New message from Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${senderName || "Not provided"}\nEmail: ${senderEmail || "Not provided"}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setMessage("");
      setSenderName("");
      setSenderEmail("");
    }, 1000);
  };

  const socialsList = [
    {
      name: "Telegram",
      handle: "@just_hanny",
      href: siteConfig.socials.telegram,
      icon: TelegramIcon,
    },
    {
      name: "LinkedIn",
      handle: "Hanan Seid",
      href: siteConfig.socials.linkedin,
      icon: LinkedInIcon,
    },
    {
      name: "GitHub",
      handle: "hannycodes",
      href: siteConfig.socials.github,
      icon: GitHubIcon,
    },
    {
      name: "Instagram",
      handle: "@h_a_n_n_y_1",
      href: siteConfig.socials.instagram,
      icon: InstagramIcon,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Header matching About, Projects & Skills */}
          <motion.div variants={cardVariants} className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blush-600 dark:text-blush-300">
              Get in Touch
            </span>
            <p className="mt-2 max-w-xl text-base text-muted-foreground">
              Have a question, an opportunity, or just want to say hi? Drop me a message below.
            </p>
          </motion.div>

          {/* Unified Contact Card */}
          <motion.div
            variants={cardVariants}
            className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-6 shadow-soft backdrop-blur-sm sm:p-10"
          >
            {/* Quick Contact Info Row: Phone & Email */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 pb-8 border-b border-border/60">
              {/* Phone display */}
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blush-100 text-blush-600 dark:bg-blush-500/15 dark:text-blush-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-mono text-sm font-medium">{siteConfig.phone}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.phone, "phone")}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Email display */}
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blush-100 text-blush-600 dark:bg-blush-500/15 dark:text-blush-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-mono text-sm font-medium">{siteConfig.email}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.email, "email")}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Message Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground/80 mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full rounded-2xl border border-border/80 bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-blush-400 focus:outline-none focus:ring-2 focus:ring-blush-300/30 dark:bg-background/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground/80 mb-1.5">
                    Your Email (Optional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full rounded-2xl border border-border/80 bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-blush-400 focus:outline-none focus:ring-2 focus:ring-blush-300/30 dark:bg-background/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground/80 mb-1.5">
                  Message <span className="text-blush-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Put anything like a text, project idea, or message here..."
                  className="w-full resize-none rounded-2xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-blush-400 focus:outline-none focus:ring-2 focus:ring-blush-300/30 dark:bg-background/40"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                {sentSuccess ? (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Email composer opened with your message!
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Sends directly to {siteConfig.email}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending || !message.trim()}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-blush-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>

            {/* Social Links with Icons in Contact Section */}
            <div className="mt-10 pt-8 border-t border-border/60">
              <p className="text-center text-xs font-medium text-muted-foreground mb-4">
                Or connect with me directly on
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialsList.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-muted/40 px-4 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-blush-300 hover:bg-blush-50/70 hover:text-blush-700 dark:hover:border-blush-500/30 dark:hover:bg-blush-500/15 dark:hover:text-blush-300"
                    >
                      <Icon className="h-4 w-4 fill-current text-muted-foreground group-hover:text-blush-600 dark:group-hover:text-blush-300 transition-colors" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
