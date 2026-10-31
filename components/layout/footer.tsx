import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site";

type SocialIcon = ComponentType<{ className?: string }>;

const socials: Array<{ label: string; href: string; icon: SocialIcon }> = [
  { label: "GitHub", href: siteConfig.socials.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkedInIcon },
  { label: "Email", href: siteConfig.socials.email, icon: Mail },
];

// Kept static so the footer stays prerenderable with Next.js Cache Components.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const year = COPYRIGHT_YEAR;

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => {
            const isExternal = href.startsWith("http");

            return (
              <li key={label}>
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
