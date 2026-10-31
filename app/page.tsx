import { Hero } from "@/components/sections/hero";

const sections = [
  {
    id: "about",
    title: "About",
    copy: "A little space for the story behind the work — coming soon.",
  },
  {
    id: "projects",
    title: "Projects",
    copy: "Selected projects and experiments will live here.",
  },
  {
    id: "skills",
    title: "Skills",
    copy: "Tools, technologies, and the things I love building with.",
  },
  {
    id: "contact",
    title: "Contact",
    copy: "Have a project in mind? Let's make something soft and thoughtful.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />

      <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 pb-16 sm:grid-cols-2 sm:px-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <h2 className="font-display text-2xl font-semibold">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {section.copy}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
