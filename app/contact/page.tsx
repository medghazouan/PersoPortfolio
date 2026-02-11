import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home – Mohamed Ghazouan",
  description:
    "Full‑stack developer based in Marrakech, building web applications and AI‑powered tools with React, Laravel, Python, and RAG.",
};


export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="text-sm text-slate-300">
        If you&apos;d like to talk about a role, a freelance project, or my work, feel free to reach out.
      </p>

      <ul className="space-y-2 text-sm">
        <li>
          Email:{" "}
          <a
            className="text-sky-400 underline"
            href="mailto:ghezouanmohamed02@gmail.com"
          >
            ghezouanmohamed02@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="text-sky-400 underline"
            href="https://www.linkedin.com/in/mohamed-ghazouan"
            target="_blank"
            rel="noreferrer"
          >
            mohamed-ghazouan
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            className="text-sky-400 underline"
            href="https://github.com/..."
            target="_blank"
            rel="noreferrer"
          >
            (add your GitHub username here)
          </a>
        </li>
      </ul>
    </section>
  );
}
