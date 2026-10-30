import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/soft.css";
import "@fontsource-variable/quicksand";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1719" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
