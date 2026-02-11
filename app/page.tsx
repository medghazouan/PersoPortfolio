// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home – Mohamed Ghazouan",
  description:
    "Full‑stack developer based in Marrakech, building web applications and AI‑powered tools with React, Laravel, Python, and RAG.",
};

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Portfolio – Full‑stack & AI
        </p>
        <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          I build full‑stack web applications and AI‑powered tools using React, Laravel, and RAG/LLM
          technologies.
        </h1>
        <p className="max-w-xl text-sm text-slate-300">
          I&apos;m a full‑stack developer in training, focused on end‑to‑end products: from Laravel and
          Python APIs to React UIs and AI features built with LangChain, LangGraph, and vector search.
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-900"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-600 px-4 py-2 text-xs font-medium text-slate-100"
          >
            Contact me
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight text-slate-100">
          Featured work
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3 text-xs">
          <li className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
            <p className="font-medium">BIDAYALAB – RAG Chatbot</p>
            <p className="mt-1 text-slate-400">
              Integrated an intelligent RAG‑based chatbot and fixed build & deployment issues for a
              digital agency website.
            </p>
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
            <p className="font-medium">ARCA – Compliance Agent</p>
            <p className="mt-1 text-slate-400">
              Multi‑agent AI system to analyze regulations and detect inconsistencies with internal
              policies using LangChain and FAISS.
            </p>
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
            <p className="font-medium">Delivery Management App</p>
            <p className="mt-1 text-slate-400">
              Full delivery management web app built with React, Laravel, and MySQL: orders, tracking,
              and drivers.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
