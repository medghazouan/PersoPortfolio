// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mohamed Ghazouan – Full‑stack & AI",
  description: "Full‑stack developer (React/Laravel) building web apps with applied AI (RAG, LangChain, LangGraph).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
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
