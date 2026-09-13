# IES Applicant Assistant

An unofficial applicant-assistant prototype for the Copernicus Berlin IES Skills Challenge, made by **Nikita Svetlichnykh**.

It is not an official Copernicus Berlin website. The self-check result is an informal, non-binding estimate — the developer has no access to Copernicus Berlin's actual candidate-selection methodology, so the scoring logic is an approximation based on publicly available programme information, not a real eligibility decision.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 + shadcn/ui-style components on Radix UI primitives
- Poppins + the Copernicus Berlin brand palette
- Supabase (Postgres) for lead storage
- Resend for transactional email
- Zod for API validation
- A lightweight custom i18n layer (21 languages)

## Architecture (Feature-Sliced Design)

```
src/
  app/        Next.js routing — layout, page, /api/lead, /admin + its API routes, /privacy, /terms
  views/home/ FSD "pages" layer
  widgets/    Page sections: header, hero, highlights, stats, funding, eligibility widget, faq, footer, cookie consent
  features/   eligibility-quiz, lead-capture-form, language-switcher
  entities/   eligibility-answer (types + scoring), lead (schema)
  shared/     ui primitives, i18n, config, server-only API integrations (supabase, resend, admin auth)
```

Dependency direction: `app → views → widgets → features → entities → shared`. `src/app/admin/*` is colocated with its route rather than split across FSD layers, since it's an internal tool, not part of the public site's composition tree.

## Admin panel

`/admin` lists submitted leads behind a single shared password (no user accounts). Two kinds of submissions land there: a plain email opt-in (just wants the info sent) and a consultation request (full contact details, flagged distinctly in the table). Set `ADMIN_PASSWORD` in your environment to unlock it — without it, `/admin` stays fully locked out.

## Running locally

### With Node

```bash
npm install
npm run dev
```

The site works fully without any backend configured. To enable lead storage, email, and the admin panel, copy `.env.example` to `.env.local` and fill in `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `ADMIN_PASSWORD`. Run `supabase/schema.sql` in your Supabase project's SQL editor to create the `leads` table.

### With Docker

```bash
cp .env.example .env
docker compose up --build
```

Then open `http://localhost:3000`. Fill in `.env` first for the backend/admin panel to work; the site itself runs regardless.
