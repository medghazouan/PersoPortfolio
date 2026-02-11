import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home – Mohamed Ghazouan",
  description:
    "Full‑stack developer based in Marrakech, building web applications and AI‑powered tools with React, Laravel, Python, and RAG.",
};



export default function AboutPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-sm text-slate-300">
          I&apos;m a full‑stack developer based in Marrakech, focused on building web applications
          with React, Laravel and applied AI (RAG, LangChain, LangGraph).
        </p>
      </header>

      <div className="space-y-4 text-sm text-slate-300">
        <p>
          My background combines a technical degree in digital development (full‑stack) with
          hands‑on experience building real projects: a Laravel/React delivery management app,
          an AI compliance agent (ARCA), and a RAG chatbot integrated into a production website.
        </p>
        <p>
          I enjoy working end‑to‑end: database and APIs on the backend, clean interfaces on the
          frontend, and AI features that actually solve problems instead of being just a demo.
        </p>
        <p>
          Right now I&apos;m looking for opportunities where I can keep growing as a full‑stack
          developer while pushing further into AI‑powered products.
        </p>

        <div>
          <h2 className="text-sm font-semibold tracking-tight text-slate-100">Tech stack</h2>
          <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
            <li className="rounded-full border border-slate-700 px-3 py-1">React</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">Next.js</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">Laravel</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">PHP</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">MySQL</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">Python</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">RAG</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">LangChain</li>
            <li className="rounded-full border border-slate-700 px-3 py-1">LangGraph</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
