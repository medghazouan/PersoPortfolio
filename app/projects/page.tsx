// app/projects/page.tsx
import Link from "next/link"
import { getAllProjectsMeta } from "@/lib/content"

export default function ProjectsPage() {
  const projects = getAllProjectsMeta("en")

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <p className="text-sm text-slate-300">
        Selected work focusing on full‑stack applications and applied AI (RAG, LangChain, LangGraph).
      </p>

      <ul className="grid gap-4 sm:grid-cols-3 text-xs">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/30 p-4"
          >
            <p className="font-medium">{project.title}</p>
            <p className="mt-1 line-clamp-3 text-slate-400">{project.summary}</p>
            <p className="mt-2 text-[11px] text-slate-500">
              {project.stack.slice(0, 3).join(" · ")}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-3 text-[11px] font-medium text-sky-400"
            >
              View case study →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
