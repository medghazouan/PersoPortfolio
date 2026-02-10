// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation"
import { getAllProjectsMeta, getProjectBySlug } from "@/lib/content"
import { compileMDX } from "next-mdx-remote/rsc"

type ParamsPromise = Promise<{ slug: string }>

type Props = {
  params: ParamsPromise
}

export async function generateStaticParams() {
  const projects = getAllProjectsMeta("en")
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  // ✅ unwrap params (Next.js 15)
  const { slug } = await params

  const project = getProjectBySlug(slug, "en")
  if (!project) return notFound()

  const compiled = await compileMDX({
    source: project.content,
  })

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Project</p>
        <h1 className="text-2xl font-semibold tracking-tight">{project.meta.title}</h1>
        <p className="text-sm text-slate-300">{project.meta.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
          <span>{project.meta.role}</span>
          <span>•</span>
          <span>{project.meta.stack.join(" · ")}</span>
        </div>
      </header>

      <div className="prose prose-invert max-w-none prose-p:text-sm prose-headings:scroll-mt-24">
        {compiled.content}
      </div>
    </article>
  )
}
