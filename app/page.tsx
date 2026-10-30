import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col px-6 py-6">
      <header className="flex items-center justify-between">
        <span className="text-sm font-medium">{siteConfig.name}</span>
        <ThemeToggle />
      </header>

      <section className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Foundation ready
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Start building in{" "}
          <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/10">
            app/page.tsx
          </code>
          .
        </p>
      </section>
    </main>
  );
}
