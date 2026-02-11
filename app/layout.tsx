// app/layout.tsx
import "./globals.css";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Ghazouan – Full‑stack & AI Developer",
  description:
    "Portfolio of Mohamed Ghazouan, full‑stack developer (React/Laravel) building web applications with applied AI (RAG, LangChain, LangGraph).",
  metadataBase: new URL("https://your-domain.com"), // change later
  openGraph: {
    title: "Mohamed Ghazouan – Full‑stack & AI Developer",
    description:
      "Full‑stack web applications and AI‑powered tools using React, Laravel, Python, RAG, and LangChain.",
    url: "https://your-domain.com",
    siteName: "Mohamed Ghazouan – Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ghazouan – Full‑stack & AI",
    description:
      "Full‑stack developer building web apps and AI features (RAG, LangChain, LangGraph).",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800">
            <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
              <Link href="/" className="text-sm font-semibold tracking-tight">
                Mohamed Ghazouan
              </Link>
              <div className="flex gap-4 text-sm">
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </nav>
          </header>

          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
            {children}
          </main>

          <footer className="border-t border-slate-800">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-400">
              <span>© {new Date().getFullYear()} Mohamed Ghazouan</span>
              <span>Full‑stack & Applied AI</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
