// Kept static so the footer stays prerenderable with Next.js Cache Components.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const year = COPYRIGHT_YEAR;

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6 sm:px-10">
        <p className="text-center text-xs text-muted-foreground sm:text-sm">
          © {year} Hanan Seid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
