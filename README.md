# MyPortfolio

A personal portfolio built with the latest Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (class-based dark/light mode)
- **Animations:** [framer-motion](https://www.framer.com/motion/)
- **Icons:** [lucide-react](https://lucide.dev)

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
  page.tsx          # Home page
  globals.css       # Tailwind entry + theme tokens
components/
  providers/
    theme-provider.tsx
  ui/
    theme-toggle.tsx
lib/
  site.ts           # Shared site metadata
public/             # Static assets
```

## Theming

Dark mode uses the `class` strategy via `next-themes`. The provider is configured in
`app/layout.tsx`, and Tailwind's `dark:` variant is wired to the `.dark` class in
`app/globals.css`.
