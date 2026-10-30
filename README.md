# MyPortfolio

A soft, plushy, feminine personal portfolio built with the latest Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (class-based dark/light mode)
- **Animations:** [framer-motion](https://www.framer.com/motion/)
- **Icons:** [lucide-react](https://lucide.dev)
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Quicksand](https://fonts.google.com/specimen/Quicksand), self-hosted via [Fontsource](https://fontsource.org)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
app/
  layout.tsx        # Root layout (fonts, metadata, theme provider)
  page.tsx          # Design system preview
  globals.css       # Tailwind entry + design tokens
components/
  providers/
    theme-provider.tsx
  ui/
    theme-toggle.tsx
lib/
  site.ts           # Shared site metadata
public/             # Static assets
```

## Design System

The design system is defined CSS-first in `app/globals.css` using Tailwind v4's
`@theme` blocks. There is no `tailwind.config.js` — tokens live directly in CSS.

### Palette

**Brand scales** (all warm pink, peach, and cream — no purple or blue):

- `blush` 50–900 — baby pink / blush
- `rose` 50–900 — light rose
- `peach` 50–900 — soft peach
- `cream` 50–500 — warm off-white
- `charcoal` 50–900 — warm neutral for text

**Semantic tokens** (switch automatically between themes):

| Token                   | Light     | Dark      |
| ----------------------- | --------- | --------- |
| `background`            | `#FFF9F6` | `#1D1719` |
| `foreground`            | `#433537` | `#F8EEEC` |
| `card`                  | `#FFFDFB` | `#261E21` |
| `primary`               | `#F2A0B5` | `#E6A0B0` |
| `primary-foreground`    | `#4A2430` | `#2B1A1F` |
| `secondary`             | `#FDE6DC` | `#3A2A2E` |
| `muted`                 | `#F7E9E4` | `#2F2528` |
| `muted-foreground`      | `#8D7375` | `#C9B2B4` |
| `accent`                | `#FBD9E1` | `#4A3238` |
| `border` / `input`      | `#F2DDD8` | `#3D2E32` |
| `ring`                  | `#F2A0B5` | `#E6A0B0` |
| `destructive`           | `#E06A6A` | `#C96A6A` |

### Typography

- **Display:** `Fraunces Variable` (soft axis) — headings and hero type
- **Body:** `Quicksand Variable` — rounded, friendly, highly readable
- **Mono:** `Geist Mono` — code and small technical labels

Use `font-display`, `font-sans`, and `font-mono` utilities.

### Radius

Soft, rounded corners are the default across the system:

| Utility       | Value    |
| ------------- | -------- |
| `rounded-xs`  | `0.5rem` |
| `rounded-sm`  | `0.625rem` |
| `rounded-md`  | `0.875rem` |
| `rounded-lg`  | `1.125rem` |
| `rounded-xl`  | `1.5rem` |
| `rounded-2xl` | `2rem` |
| `rounded-3xl` | `2.5rem` |
| `rounded-4xl` | `3rem` |

### Shadows

- `shadow-soft` — subtle, feather-light elevation
- `shadow-plush` — deeper, pillow-like elevation
- `shadow-glow` — soft blush focus/highlight ring

### Usage

```tsx
<div className="rounded-3xl border border-border bg-card p-8 shadow-plush">
  <h1 className="font-display text-4xl text-foreground">
    Soft &amp; plushy
  </h1>
  <p className="text-muted-foreground">
    Warm blush tones with gentle contrast.
  </p>
  <button className="rounded-full bg-primary px-6 py-3 text-primary-foreground">
    Say hello
  </button>
</div>
```

## Theming

Dark mode uses the `class` strategy via `next-themes`. The provider is configured in
`app/layout.tsx`, and Tailwind's `dark:` variant is wired to the `.dark` class in
`app/globals.css`.

Theme switching is animated with a 400ms `cubic-bezier` transition applied to
color-related properties. Users who prefer reduced motion get instant switching.
