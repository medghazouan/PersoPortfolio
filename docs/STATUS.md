# Portfolio – Status (Updated)

**Owner:** Mohamed Ghazouan  
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS v4 + MDX  
**Languages:** EN first, FR next (planned)  
**Last update:** 2026-02-11

---

## Done ✅

### Core app & navigation
- Next.js project running (App Router).
- Pages working:
  - `/` Home
  - `/projects`
  - `/projects/[slug]`
  - `/about`
  - `/contact`
- Global layout (header/footer) and navigation working.

### Projects (MDX)
- `content/projects/*` created.
- Dynamic route `/projects/[slug]` renders MDX case studies.
- Fixed Next.js 15 params Promise issue by awaiting `params` before reading `slug`.

### Tailwind v4 setup
- Using Tailwind v4 CSS-first setup.
- `app/globals.css` uses `@import "tailwindcss"` (no `@tailwind base/components`).
- Decision: **No `tailwind.config.ts`** (theme handled with CSS variables in `globals.css`). 

### Brand direction
- Dark look chosen.
- Palette direction: warm dark neutrals + logo greige as primary + one accent for links/CTA.

---

## In progress 🟡

### UI (dark theme)
- Adding CSS variables tokens in `globals.css`:
  - `--bg`, `--surface`, `--border`, `--text`, `--muted`, `--primary`, `--accent`
- Replacing old `bg-slate-*` and `text-slate-*` with token-based classes:
  - `bg-[color:var(--bg)]`, `text-[color:var(--text)]`, etc.
- Polishing Home and Projects layout (spacing, typography, cards, CTA).

### Case study content
- Completing EN content for 3 projects:
  - BIDAYALAB
  - ARCA
  - Delivery app
- Adding cover image + 1–3 screenshots per case study.

### SEO
- Metadata being applied globally and per page.
- `metadataBase` still placeholder until deployment URL/domain is set.

---

## Next (priority order) 🔥

1) **Finish the dark UI pass (Home + Projects first)**
- Apply token colors everywhere (layout, cards, buttons, links).
- Ensure readability and consistent spacing.

2) **Finalize the 3 EN case studies**
- Each includes: Overview, Problem, Solution, Results, Learnings + links.

3) **Deploy MVP**
- Push to GitHub and deploy on Vercel.
- Test all routes on production.

4) **Add FR (phase 1)**
- Set up `/[locale]/...` routing + language switcher.
- Translate: Home/About/Contact first.
- Case studies: EN full + FR summary (then full FR later).

---

## MVP Definition of Done (v1)
- Live deployment.
- Dark UI finished and consistent.
- Projects page lists 3 case studies.
- 3 EN case studies published and readable.
- Contact links accessible in 1 click.
- Basic SEO metadata present.
