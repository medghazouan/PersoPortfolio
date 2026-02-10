// lib/content.ts
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type ProjectMeta = {
  title: string
  slug: string
  locale: string
  date: string
  summary: string
  role: string
  stack: string[]
  tags?: string[]
  repoUrl?: string
  demoUrl?: string
  coverImage?: string
}

const projectsDir = path.join(process.cwd(), 'content', 'projects')

export function getAllProjectsMeta(locale: string = 'en'): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir)
  const metas: ProjectMeta[] = []

  for (const file of files) {
    if (!file.endsWith('.mdx')) continue
    const filePath = path.join(projectsDir, file)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(raw)

    if (data.locale !== locale) continue

    metas.push(data as ProjectMeta)
  }

  // newest first
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getProjectBySlug(slug: string, locale: string = 'en') {
  const fileName = fs
    .readdirSync(projectsDir)
    .find(
      (f) =>
        f.endsWith('.mdx') &&
        fs.readFileSync(path.join(projectsDir, f), 'utf8').includes(`slug: "${slug}"`) &&
        fs.readFileSync(path.join(projectsDir, f), 'utf8').includes(`locale: "${locale}"`),
    )

  if (!fileName) return null

  const filePath = path.join(projectsDir, fileName)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return { meta: data as ProjectMeta, content }
}
