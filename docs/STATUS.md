# Portfolio – Project Status

**Owner:** Mohamed Ghazouan  
**Stack:** Next.js (App Router) + TypeScript + Tailwind + MDX  
**Last update:** 2026-02-10

---

## 1) What is already done

### Project setup
- Next.js project created with TypeScript and Tailwind.
- Git repo initialized and basic structure in place.

### Layout & navigation
- Global layout with header and footer.
- Main navigation working:
  - `/` (Home)
  - `/projects`
  - `/about`
  - `/contact`

### Home page
- Hero section describing positioning:
  - Full‑stack developer (React/Laravel) + applied AI (RAG, LangChain, LangGraph).
- Featured work preview cards:
  - BIDAYALAB – RAG Chatbot.
  - ARCA – Compliance Agent.
  - Delivery Management App.

### Projects system (MDX)
- MDX support configured.
- `content/projects` directory created.
- Dynamic route `/projects/[slug]` implemented.
- First project (e.g. `bidayalab.en.mdx`) loads correctly via slug.

---

## 2) What is in progress

- Finalizing the MDX content model for projects (frontmatter + body sections).
- Writing real content for the BIDAYALAB case study (Overview / Problem / Solution / Results / Learnings).
- Planning ARCA and Delivery App case studies using the same structure.

---

## 3) Next steps (short term)

1. **Complete 3 EN case studies**
   - Fill `bidayalab.en.mdx` with real text.
   - Create `arca.en.mdx` and `delivery.en.mdx` with:
     - Frontmatter (title, slug, summary, stack, role, date).
     - Sections: Overview, Problem, Solution, Results, Learnings.

2. **Improve Projects index**
   - Read all project metas and render them in `/projects` with:
     - Title, summary, stack, “View case study” link.

3. **Refine About & Contact**
   - About: add brief bio + timeline + key tech stack.
   - Contact: add final GitHub URL + maybe a short “I’m currently looking for…” line.

---

## 4) Next steps (medium term)

- Add basic SEO metadata per page (title/description + Open Graph).
- Decide default locale (EN or FR) and prepare i18n routing for `/en` and `/fr`.
- Create `PROJECT_SCOPE.md` (already drafted) as the main design/spec doc and keep it updated.

---

## 5) Definition of “MVP done”

The MVP of the portfolio will be considered **done** when:

- Home, Projects, About and Contact pages are live and styled.
- At least **3 project case studies** are available in English with:
  - Clear problem, solution, results, and your role.
- All navigation works on desktop and mobile.
- Contact info (email, LinkedIn, GitHub) is reachable in 1 click from anywhere.
- The site is deployed (e.g. on Vercel) and loads without errors.
