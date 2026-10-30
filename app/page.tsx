import { Heart, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/lib/site";

const palette = [
  { name: "Blush", className: "bg-blush-200" },
  { name: "Light rose", className: "bg-rose-200" },
  { name: "Soft peach", className: "bg-peach-200" },
  { name: "Cream", className: "bg-cream-200" },
  { name: "Dusty rose", className: "bg-blush-500" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col px-6 py-6 sm:px-10">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <span className="font-display text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </span>
        <ThemeToggle />
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Soft &amp; plushy design system
        </span>

        <div className="max-w-2xl space-y-5 text-center">
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Blush, cream &amp;{" "}
            <span className="text-blush-600 dark:text-blush-300">gentle</span>{" "}
            curves
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A warm, minimal foundation in baby pink and dusty rose. Rounded
            corners, feather-soft shadows, and smooth theme transitions.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-plush transition-colors hover:bg-blush-400"
          >
            <Heart className="h-4 w-4" />
            Primary action
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Secondary action
          </button>
        </div>

        <div className="w-full max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-plush sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="font-display text-xl font-semibold">Palette</h2>
            <span className="text-xs text-muted-foreground">
              Theme-aware tokens
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {palette.map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className={`h-16 rounded-2xl ring-1 ring-inset ring-charcoal-900/5 dark:ring-white/10 ${color.className}`}
                />
                <p className="text-center text-xs font-medium text-muted-foreground">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-5xl pb-4 text-center text-xs text-muted-foreground">
        Built with Next.js, Tailwind CSS &amp; a lot of blush.
      </footer>
    </main>
  );
}
