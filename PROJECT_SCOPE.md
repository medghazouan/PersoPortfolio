# Portfolio — Master Spec (Next.js + Tailwind + i18n EN/FR + Blog)

**Owner:** Mohamed Ghazouan  
**Base:** Marrakech, Morocco  
**Positioning (1 line):** Full‑stack developer (React/Laravel) building web apps with Applied AI (RAG, LangChain/LangGraph)  
**Repo:** (add later)  
**Production URL:** (add later)  
**Status:** v1 Draft  
**Updated:** 2026‑02‑10

---

## 0) Executive summary
This project is a content-driven developer portfolio built with Next.js + Tailwind.
It targets recruiters first (fast proof of skills) and supports freelance leads second (clear services + contact).
The site is bilingual (EN/FR) and scalable: projects + blog are stored as MDX content files.

---

## 1) Goals (Why)
### Primary goals
- Get interviews for Full‑stack roles (React/Laravel) and roles that value AI features (RAG/LLM apps).
- Showcase 3 strong, well-explained case studies (problem → solution → results).
- Provide a maintainable structure where adding a new project/blog post is “add a file + images”.

### Secondary goals
- Personal brand credibility: short blog posts that show problem‑solving and learning.
- SEO + shareable previews (LinkedIn, etc.).

---

## 2) Audience & messaging
### Primary audience
- Recruiters / hiring managers who scan quickly and want proof, not long text.

### Secondary audience
- Potential freelance clients who want “what you do + examples + how to contact”.

### Message hierarchy (what visitors must understand fast)
1) Who you are (Full‑stack + Applied AI)
2) What you can ship (real projects, deployed, end‑to‑end)
3) How to reach you (1 click)

---

## 3) Scope (What’s included)
### MVP pages
- Home: positioning, featured projects, CTA
- Projects index: list + filters (filters optional v2)
- Project detail (case study): 3 featured
- Blog index + blog post page
- About: skills + timeline + tech stack
- Contact: email + LinkedIn + GitHub (+ optional form)
- CV download (PDF)

### Content (MVP)
Featured case studies (3):
1) **BIDAYALAB — Optimization & RAG Chatbot Integration**
2) **ARCA — AI Regulatory Compliance Agent**
3) **Delivery Management Web App — React + Laravel + MySQL**

Blog posts (MVP: 0–3)
- Post 1: “How I integrated a RAG chatbot in production”
- Post 2: “Lessons deploying and fixing build issues”
- Post 3: “RAG pipeline notes: chunking, embeddings, retrieval”

---

## 4) Out of scope (Not now)
- Complex 3D backgrounds on content pages (keep subtle visuals only)
- A full CMS (use MDX files first)
- More than 3 featured projects on Home
- Multi-language for every blog post from day 1 (start EN-first or partial FR)

---

## 5) Architecture & routing (i18n EN/FR)
### Locale routing
- `/en/...` and `/fr/...` as first-class routes.
- Default locale behavior:
  - Option A: redirect `/` to `/en` (or `/fr`)
  - Option B: serve `/` as locale-detected (v2)

### Route map (MVP)
- `/[locale]`
  - `/` (Home)
  - `/projects`
  - `/projects/[slug]`
  - `/blog`
  - `/blog/[slug]`
  - `/about`
  - `/contact`

---

## 6) Tech stack decisions
### Framework
- Next.js (App Router) + TypeScript

### Styling
- Tailwind CSS

### Content layer
- MDX for blog posts and project case studies
- Images in `/public` (or a dedicated images folder)

### Deployment
- Vercel (Git-based deploy)

---

## 7) Scalable content model (MDX)
### Content types
1) `ProjectCaseStudy`
2) `BlogPost`

### Frontmatter (ProjectCaseStudy)
Required:
- `title`
- `slug`
- `locale` (`en` | `fr`)
- `date`
- `summary` (1–2 lines)
- `role` (what you did)
- `stack` (array)
- `tags` (array)
- `repoUrl` (optional)
- `demoUrl` (optional)
- `coverImage` (path)

Optional:
- `highlights` (array)
- `duration`
- `team` (solo/team)
- `status` (done/in progress)

### Frontmatter (BlogPost)
Required:
- `title`
- `slug`
- `locale`
- `date`
- `summary`
- `tags`

Optional:
- `coverImage`

### Case study page structure (standard)
1) TL;DR (3 bullets)
2) Context + constraints
3) Problem
4) Solution (architecture + decisions)
5) Implementation notes (key parts only)
6) Results (metrics if possible, otherwise concrete outcomes)
7) Learnings + next steps

---

## 8) Repository structure (recommended)
app/
  [locale]/
    layout.tsx
    page.tsx
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx

content/
  projects/
    arca.en.mdx
    arca.fr.mdx
    bidayalab.en.mdx
    bidayalab.fr.mdx
    delivery.en.mdx
    delivery.fr.mdx
  blog/
    rag-chatbot.en.mdx
    deploy-fixes.en.mdx
    rag-notes.en.mdx

messages/
  en.json
  fr.json

components/
  Header.tsx
  Footer.tsx
  ProjectCard.tsx
  LanguageSwitcher.tsx
  Tag.tsx

lib/
  content.ts       # load MDX, list posts/projects, get by slug+locale
  seo.ts           # metadata helpers
  i18n.ts          # locale config

public/
  images/
    projects/
    blog/

---

## 9) SEO, performance, accessibility (quality bar)
### SEO (MVP)
- Unique title + description per page
- Open Graph meta for Home + each case study/post
- Clean URLs (slug-based)
- Sitemap + robots (v2 if time)

### Performance
- Optimize images (responsive sizes)
- Avoid heavy animations on reading pages
- Code-split client components

### Accessibility
- Proper heading order (H1 → H2 → H3)
- Keyboard nav + focus styles
- Contrast checks

---

## 10) Design system rules (Tailwind)
- Define tokens in Tailwind config: colors, spacing, typography scale.
- Use consistent layout components:
  - `Container`, `Section`, `Stack`, `Button`, `Card`
- Keep motion subtle; never compete with text.

---

## 11) Definition of Done (MVP)
MVP is complete when:
- Deployed site is live
- EN+FR core pages exist (Home/About/Contact at minimum)
- 3 case studies are published in EN (FR versions can be “summary-only” if needed)
- Projects index shows 3 featured projects
- Contact links are visible from every page
- No broken links, no missing images, mobile layout works

---

## 12) Execution plan (7–10 days)
Day 1:
- Init Next.js + Tailwind + basic layout (Header/Footer)
Day 2:
- Implement i18n routing + language switcher
Day 3:
- Add MDX pipeline + content loader utilities
Day 4:
- Build Projects index + Project detail template
Day 5–6:
- Write & publish 3 case studies (EN first)
Day 7:
- About + Contact + CV download + SEO basics
Day 8–10 (optional):
- Add Blog index + 1–3 posts + FR summaries

---

## 13) Backlog (v2+)
- Full FR translations for all case studies and selected blog posts
- Project filtering by tags
- Analytics (privacy-friendly)
- Email contact form with spam protection
- More case studies (only if they’re as strong as the top 3)

---

## 14) Risks & mitigations
- Risk: i18n doubles content work → Mitigation: EN-first, FR summaries, translate best pages later.
- Risk: too many features → Mitigation: keep MVP strict; ship early, iterate weekly.
- Risk: visuals reduce readability/performance → Mitigation: content pages stay clean, motion minimal.

---

## 15) Content checklist (per case study)
- Clear problem statement
- Your role (what you owned)
- Architecture diagram (optional)
- Key technical decisions (2–5)
- Results (metrics or concrete outcomes)
- Links (repo/demo) if allowed
- Screenshots / GIF
