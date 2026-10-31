"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/lib/site";

type NavItem = (typeof siteConfig.nav)[number];

function NavLink({
  item,
  active,
  className = "",
  onClick,
}: {
  item: NavItem;
  active: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={`group relative inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        active
          ? "text-blush-600 dark:text-blush-300"
          : "text-muted-foreground hover:text-foreground"
      } ${className}`}
    >
      {item.label}
      <span
        aria-hidden
        className={`absolute inset-x-0 bottom-1 h-px origin-left rounded-full bg-blush-400/80 transition-transform duration-300 ease-out ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const updateActive = () => {
      const marker = window.scrollY + 140;
      let current: string | null = null;

      for (const item of siteConfig.nav) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (!section) continue;

        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = item.href;
      }

      setActiveHref(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-6 py-4 sm:px-10"
      >
        <Link
          href="/"
          className="min-w-0 rounded-full font-display text-base font-semibold tracking-tight text-foreground transition-colors hover:text-blush-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:text-blush-300 sm:text-lg"
        >
          {siteConfig.navName}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              active={activeHref === item.href}
              className="px-1 py-2"
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent/70 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border/40 bg-background/95 px-6 py-3 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-2">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                active={activeHref === item.href}
                className="w-fit px-1 py-2"
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
